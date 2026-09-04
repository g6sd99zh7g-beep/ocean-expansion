let dark = false;

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("themeBtn");

  btn.addEventListener("click", () => {

    dark = !dark;

    if(dark){

      document.body.style.background =
      "linear-gradient(180deg,#021522,#031b2f,#052947,#083b63)";

    }else{

      document.body.style.background =
      "linear-gradient(180deg,#0b75aa,#045f8c,#023e5c,#021522)";

    }

  });

});
