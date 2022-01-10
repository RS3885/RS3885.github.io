function runMe(stR) {
    alert('Afternoon Mim!');
    console.log(stR);
    alert(stR);
}

runMe("Get that job");


const HelloVueApp = {
    data() {
      return {
        message: 'Hello Mimii. How is the job hunting going? There will be more coming to this page so be sure to revisit occassionaly'
      }
    }
  }
  
  Vue.createApp(HelloVueApp).mount('#hello-vue')
