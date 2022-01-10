function runMe(stR) {
    alert('Afternoon Mim!');
    console.log(stR);
    alert(stR);
}

runMe("Get that job");


const HelloVueApp = {
    data() {
      return {
        message: 'Hello Mimii. How is the job hunting going?'
      }
    }
  }
  
  Vue.createApp(HelloVueApp).mount('#hello-vue')
