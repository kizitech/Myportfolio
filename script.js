let s = 0
var txts = 'Hello there 👋🏾, I am Ohani Kizito and I am a Front-End Web Developer. I am here to create Web experiences that are both functional and engaging.';
  var i = 0;
var speed = 150;
  function typeWriter() {
    if (i < txts.length) {
            document.querySelector(".intro").innerHTML += txts.charAt(i);
       
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter()
