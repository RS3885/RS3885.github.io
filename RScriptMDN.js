function runMe(stR) {
    alert('MDN rs is here again in a src file. Im learning fast!');
    console.log(stR);
    alert(stR);
}

runMe("fred MDN");


const HelloVueApp = {
    data() {
      return {
        message: 'Hello Mimii. How is the job hunting going?'
      }
    }
  }
  
  Vue.createApp(HelloVueApp).mount('#hello-vue')
