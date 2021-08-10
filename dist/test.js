const fetch = require("node-fetch");
(async () => {
    try {
        let content_type = (await fetch('https://ipfs.io/ipfs/QmU3QwoyfY1dQxmnbE58MjWi11coFMFNivjQNVL4HgPvJp')).headers.get("content-type")
        
            if (content_type.indexOf('image')==0){
                console.log('image');
            }else{
                
            }
        
        console.log(content_type);
    } catch (e) {
        console.log(e);
    }
})()