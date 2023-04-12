function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
  
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  }
  check();

  // //for card1
  // dots.style.display = "none";
  // function myFunction2() {
  //   var dots = document.getElementById("dots2");
  //   var moreText = document.getElementById("more2");
  //   var btnText = document.getElementById("myBtn2");
  
  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Show more"; 
  //     moreText.style.display = "none";
  //   } else {
  //     dots.style.display = "none";
  //     btnText.innerHTML = "Show less"; 
  //     moreText.style.display = "inline";
  //   }
  // }

  // myFunction2()

const accordion = document.getElementsByClassName('contentBx');
for (i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}