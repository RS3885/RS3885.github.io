function runMe(stR) {
    alert('Hi Mim!');
    console.log(stR);
    alert(stR);
}

runMe("Get that job");


const HelloVueApp = {
    data() {
      return {
        message: 'How is the job hunting going? There will be more coming to this page so be sure to revisit occassionaly.\
        \n Very basic looking but there is a lot more going on under the hood.'
      } 
    }
  }
  
  Vue.createApp(HelloVueApp).mount('#hello-vue')
