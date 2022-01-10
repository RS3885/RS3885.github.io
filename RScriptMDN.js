function runMe(stR) {
    alert('Hi Mim!');
    console.log(stR);
    alert(stR);
}

runMe("Good luck with the job applications,\nMim");

/*
const HelloVueApp = {
    data() {
      return {
        message: 'How is the job hunting going? There will be more coming to this page so be sure to revisit occassionaly.\
        \nVery basic looking but there is a lot more going on under the hood.'
      } 
    }
  }
  
  Vue.createApp(HelloVueApp).mount('#hello-vue')
  */


function mimStr() {
  let mStr = document.getElementById("mim");
  mStr.innerText = 'How is the job hunting going? There will be more coming to this page so be sure to revisit occassionaly.\
  \nVery basic looking but there is a lot more going on under the hood.';
}

mimStr();


