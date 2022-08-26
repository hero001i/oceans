const bb = document.querySelector(".bb");
const menu = document.querySelector(".menu");
const wrong = document.querySelector(".wrong");
bb.addEventListener("click", function(){
   menu.classList.toggle("active");
   wrong.classList.toggle("active");
chngimg();
})

function chngimg() {
     var img = document.getElementById('imgplus').src;
     if (img.indexOf('images/wrong.png')!=-1) {
         document.getElementById('imgplus').src  = 'images/hamburger.png';
     }
      else {
        document.getElementById('imgplus').src = 'images/wrong.png';
    }

 }
