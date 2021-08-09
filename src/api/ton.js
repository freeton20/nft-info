const { TonClient, abiContract } = require("@tonclient/core");
const { libWeb, libWebSetup } = require("@tonclient/lib-web");
import abi from "./nft.abi.json";
libWebSetup({
    binaryURL: "./tonclient.wasm",
});
TonClient.useBinaryLibrary(libWeb);
const client = new TonClient({
    network: {
        server_address: "main.ton.dev",
    }
});
async function getInfo(nftAddress) {
    try {
        const [account, message] = await Promise.all([
            client.net.query_collection({
                collection: 'accounts',
                filter: { id: { eq: nftAddress } },
                result: 'boc'
            })
                .then(({ result }) => result[0].boc)
                .catch(() => {
                    throw Error(`Failed to fetch account data`)
                }),

            client.abi.encode_message({
                abi: abiContract(abi),
                address: nftAddress,
                call_set: {
                    function_name: 'getInfo',
                    input: {}
                },
                signer: { type: 'None' }
            }).then(({ message }) => message)
        ]);
        const response = await client.tvm.run_tvm({ message, account, abi: abiContract(abi) });
        return response.decoded.output;
    } catch (e) {
        return e;
    }
}
export default {
    getInfo
}