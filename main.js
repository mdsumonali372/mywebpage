function myFunction() {
    var x = document.getElementById("mobileMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


window.addEventListener('resize', function(event){
  //selecting the menu bars....
  var x = document.getElementById("mobileMenu");



// if the size is gretter than 1000px and style is hidden(none), then it will turn visible (flex)....
if(window.innerWidth > 1000){
    if(x.style.display === "none" || x.style.display === "block" ){
      x.style.display = "flex";
    }
  } 




// if the size is lower than 900px and bar is still visible (flex) then it will turn hidden (none)....
else if(window.innerWidth < 992){
  if(x.style.display === "flex" || x.style.display === "block" ){
    x.style.display = "none";
  }
}

})