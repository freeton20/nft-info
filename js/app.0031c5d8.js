(function(e){function t(t){for(var r,u,o=t[0],i=t[1],d=t[2],c=0,l=[];c<o.length;c++)u=o[c],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&l.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},s=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="nft-info/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var p=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"094d":function(e,t,n){"use strict";(function(e){var r=n("1da1"),a=(n("96cf"),n("159b"),n("649f"));t["a"]={data:function(){return{address:null,root:null,owner:null,author:null,addrData:null,number:null,amount:null,imgUrl:null,error:null,showResponse:!1}},watch:{address:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(n.length<10)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,a["a"].getInfo(n);case 4:r=t.sent,void 0!==r.message&&(this.error=r.message,this.root=this.owner=this.author=this.number=this.amount=null,this.showResponse=!1),void 0!==r.addrRoot&&(this.showResponse=!0,this.root=r.addrRoot,this.owner=r.addrOwner,this.author=r.addrAuthor,this.addrData=r.addrData,this.number=r.number,this.amount=r.amount,this.error=null,s="",e.from(r.url,"hex").forEach((function(e){0!==e&&(s+=String.fromCharCode(e))})),this.imgUrl="https://ipfs.io/ipfs/"+s);case 7:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}()}}}).call(this,n("b639").Buffer)},1805:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{staticClass:"h1 text-center mt-4 mb-4"},[e._v(" NFT info ")]),n("address-input")],1)},s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-form-input",{attrs:{size:"lg",placeholder:"Enter token address"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),n("div",{staticClass:"bg-warning text-dark"},[e._v(" "+e._s(e.error)+" ")]),e.showResponse?n("div",{staticClass:"container mt-4 info bg-white text-dark"},[n("div",[n("b-img-lazy",{attrs:{src:e.imgUrl,if:"img"}})],1),n("div",[n("b",[e._v("Root: ")]),e._v(e._s(e.root))]),n("div",[n("b",[e._v("Owner: ")]),e._v(e._s(e.owner))]),n("div",[n("b",[e._v("Author: ")]),e._v(e._s(e.author))]),n("div",[n("b",[e._v("Data address: ")]),e._v(e._s(e.addrData))]),n("div",[n("b",[e._v("Number: ")]),e._v(e._s(e.number))]),n("div",[n("b",[e._v("Amount: ")]),e._v(e._s(e.amount))])]):e._e()],1)},o=[],i=n("094d"),d=i["a"],p=(n("96b8"),n("2877")),c=Object(p["a"])(d,u,o,!1,null,"56b57180",null),l=c.exports,m={name:"App",components:{addressInput:l}},f=m,b=(n("034f"),Object(p["a"])(f,a,s,!1,null,null,null)),h=b.exports,y=n("2f62");r["default"].use(y["a"]);var v=new y["a"].Store({actions:{},mutations:{},getters:{},modules:{}}),_=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(_["a"]),r["default"].config.productionTip=!1,new r["default"]({store:v,render:function(e){return e(h)}}).$mount("#app")},"649f":function(e,t,n){"use strict";var r=n("3835"),a=n("1da1"),s=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("8e34")),u=n("5e5b"),o=u.TonClient,i=u.abiContract,d=n("866c"),p=d.libWeb,c=d.libWebSetup;c({binaryURL:"./tonclient.wasm"}),o.useBinaryLibrary(p);var l=new o({network:{server_address:"main.ton.dev"}});function m(e){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,u,o,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([l.net.query_collection({collection:"accounts",filter:{id:{eq:t}},result:"boc"}).then((function(e){var t=e.result;return t[0].boc})).catch((function(){throw Error("Failed to fetch account data")})),l.abi.encode_message({abi:i(s),address:t,call_set:{function_name:"getInfo",input:{}},signer:{type:"None"}}).then((function(e){var t=e.message;return t}))]);case 3:return n=e.sent,a=Object(r["a"])(n,2),u=a[0],o=a[1],e.next=9,l.tvm.run_tvm({message:o,account:u,abi:i(s)});case 9:return d=e.sent,e.abrupt("return",d.decoded.output);case 13:return e.prev=13,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),f.apply(this,arguments)}t["a"]={getInfo:m}},"85ec":function(e,t,n){},"8e34":function(e){e.exports=JSON.parse('{"ABI version":2,"header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"addrOwner","type":"address"},{"name":"codeIndex","type":"cell"},{"name":"_name","type":"bytes"},{"name":"_url","type":"bytes"},{"name":"_editionNumber","type":"uint8"},{"name":"_editionAmount","type":"uint8"},{"name":"_managersList","type":"address[]"},{"name":"_royalty","type":"uint8"}],"outputs":[]},{"name":"transferOwnership","inputs":[{"name":"addrTo","type":"address"}],"outputs":[]},{"name":"getInfo","inputs":[],"outputs":[{"name":"addrRoot","type":"address"},{"name":"addrOwner","type":"address"},{"name":"addrAuthor","type":"address"},{"name":"addrData","type":"address"},{"name":"id","type":"uint256"},{"name":"name","type":"bytes"},{"name":"url","type":"bytes"},{"name":"number","type":"uint8"},{"name":"amount","type":"uint8"}]},{"name":"getOwner","inputs":[],"outputs":[{"name":"addrOwner","type":"address"}]},{"name":"lendOwnership","inputs":[{"name":"_addr","type":"address"}],"outputs":[]},{"name":"returnOwnership","inputs":[],"outputs":[]},{"name":"getAllowance","inputs":[],"outputs":[{"name":"addr","type":"address"}]},{"name":"burn","inputs":[{"name":"_dest","type":"address"}],"outputs":[]},{"name":"addManager","inputs":[{"name":"_addr","type":"address"}],"outputs":[]},{"name":"removeManager","inputs":[{"name":"_addr","type":"address"}],"outputs":[]},{"name":"getManagersList","inputs":[],"outputs":[{"name":"managers","type":"address[]"}]},{"name":"resolveCodeHashIndex","inputs":[{"name":"addrRoot","type":"address"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"codeHashIndex","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"addrRoot","type":"address"},{"name":"addrData","type":"address"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"addrIndex","type":"address"}]},{"name":"royalty","inputs":[],"outputs":[{"name":"royalty","type":"uint8"}]}],"data":[{"key":1,"name":"_id","type":"uint256"}],"events":[]}')},"96b8":function(e,t,n){"use strict";n("1805")}});
//# sourceMappingURL=app.0031c5d8.js.map