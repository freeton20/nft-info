<template>
  <div>
    <b-form-input size="lg"
      v-model="address"
      placeholder="Enter token address"
    ></b-form-input>
    <div class="container mt-4 info bg-white text-dark">
      <div>
        {{ root }}
      </div>
      <div>
        {{ owner }}
      </div>
      <div>
        {{ author }}
      </div>
      <div>
        {{ addrData }}
      </div>
      <div>
        {{ number }}
      </div>
      <div>
        {{ amount }}
      </div>
      <div class="bg-warning text-dark">
        {{ error }}
      </div>
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
      error: null,
    };
  },
  watch: {
    address: async function (val) {
        if(val.length < 10){
            return;
        }
      const data = await ton.getInfo(val);
      if (data.message !== undefined) {
        this.error = data.message;
        this.root = this.owner = this.author = this.number = this.amount = null;
      }

      if (data.addrRoot !== undefined) {
        this.root = "Root: " + data.addrRoot;
        this.owner = "Owner: " + data.addrOwner;
        this.author = "Author: " + data.addrAuthor;
        this.addrData = "Data address: " + data.addrData;
        this.number = "Number: " + data.number;
        this.amount = "Amount: " + data.amount;
        this.error = null;
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