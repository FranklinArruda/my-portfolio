
const scrollUpBtn = document.querySelector(".scrollUpBtn");


function showScrollUpBtn() {

     if (window.scrollY > 375 ) {
        scrollUpBtn.classList.remove("hide");
        scrollUpBtn.classList.add("show");
    } else {
        scrollUpBtn.classList.remove("show");
        scrollUpBtn.classList.add("hide");
    } 
  }


  export { showScrollUpBtn }