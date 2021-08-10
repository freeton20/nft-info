<template>
  <div>
    <b-form-input
      size="lg"
      v-model="address"
      placeholder="Enter token address"
    ></b-form-input>
    <div class="bg-warning text-dark">
      {{ error }}
    </div>
    <div
      v-if="showResponse"
      class="container mt-4 mb-4 info bg-white text-dark"
    >
      <div v-html="media"></div>
      <div><b>Root: </b>{{ root }}</div>
      <div><b>Owner: </b>{{ owner }}</div>
      <div><b>Author: </b>{{ author }}</div>
      <div><b>Data address: </b>{{ addrData }}</div>
      <div><b>Number: </b>{{ number }}</div>
      <div><b>Amount: </b>{{ amount }}</div>
    </div>
  </div>
</template>
<script>
import ton from "../api/ton.js";

export default {
  data() {
    return {
      address: null,
      root: null,
      owner: null,
      author: null,
      addrData: null,
      number: null,
      amount: null,
      media: null,
      error: null,
      showResponse: false,
    };
  },
  watch: {
    address: async function (val) {
      if (val.length < 10) {
        return;
      }
      const data = await ton.getInfo(val);
      if (data.message !== undefined) {
        this.error = data.message;
        this.root = this.owner = this.author = this.number = this.amount = null;
        this.showResponse = false;
      }

      if (data.addrRoot !== undefined) {
        this.showResponse = true;
        this.root = data.addrRoot;
        this.owner = data.addrOwner;
        this.author = data.addrAuthor;
        this.addrData = data.addrData;
        this.number = data.number;
        this.amount = data.amount;
        this.error = null;

        let code = "";
        Buffer.from(data.url, "hex").forEach(function (el) {
          if (el !== 0) {
            code = code + String.fromCharCode(el);
          }
        });

        let url = "https://ipfs.io/ipfs/" + code;
        let content_type = (await fetch(url)).headers.get("content-type");
        if (content_type.indexOf("image") == 0) {
          this.media = `<img style="max-width:500px; max-height: 500px" src="${url}"/>`;
        } else {
          this.media = `<iframe src="${url}" style="width: 500px; height: 500px"></iframe>`;
        }
      }
    },
  },
};
</script>
<style scoped>
.info div {
  margin-top: 3rem;
  font-size: 1.4rem;
}
</style>