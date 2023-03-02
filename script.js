let hambuger = document.querySelector(".hambuger")
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let ul = document.querySelector("nav ul")
let ulli = document.querySelector("nav button")
let a = document.querySelector(".aa")

hambuger.addEventListener('click', clicked)
function clicked(){
    if (p1.style.transform === 'none') {
        p1.style.transform = 'rotate(45deg)'
        p2.style.transform = 'rotate(-45deg)'
        p2.style.marginTop = '-12px'
        ul.style.display = "flex"
        ulli.style.display = "flex"
        a.style.display = "flex"
    } else {
        p1.style.transform = 'none'
        p2.style.transform = 'none'
        p2.style.marginTop = '0px'
        ul.style.display = "none"
        ulli.style.display = "none"
        a.style.display = "none"
    }
}
let s = 0
var txts = 'Hello, I am Ohani Kizito and I am a web developer.';
  var i = 0;
var txt = 'I build quality and responsive websites for clients';
var speed = 50;
  function typeWriter() {
    if (i < txt.length) {
            document.querySelector(".h2").innerHTML += txt.charAt(i);
            document.querySelector(".h1").innerHTML += txts.charAt(i);
       
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter()
