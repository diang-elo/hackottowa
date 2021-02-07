//Rotating Words
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
   
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };




  //gallery

  let i = 0;

  let box1 = document.getElementById("image1");
  let box2 = document.getElementById("image2");
  let box3 = document.getElementById("image3");
  let box4 = document.getElementById("image4");
  let a1 = document.querySelector(".a1");
  let a2 = document.querySelector(".a2");
  let a3 = document.querySelector(".a3");
  let a4 = document.querySelector(".a4");
  let info = document.getElementById("info");

  a1.onclick = function () {
      box1.style.opacity = 1;
      box2.style.opacity = 0;
      box3.style.opacity = 0;
      box4.style.opacity = 0;
      info.innerHTML = "Rock Paper Scissors"
      i = 0;
  }

  a2.onclick = function () {
      box1.style.opacity = 0;
      box2.style.opacity = 1;
      box3.style.opacity = 0;
      box4.style.opacity = 0;
      info.innerHTML = "Tic Tac Toe"
      i = 1;
  }

  a3.onclick = function () {
      box1.style.opacity = 0;
      box2.style.opacity = 0;
      box3.style.opacity = 1;
      box4.style.opacity = 0;
      info.innerHTML = "Image 3"
      i = 2;
  }

  a4.onclick = function () {
      box1.style.opacity = 0;
      box2.style.opacity = 0;
      box3.style.opacity = 0;
      box4.style.opacity = 1;
      info.innerHTML = "Image 4"
      i = 3;
  }

  document.addEventListener("keydown", (e) => {
      if (e.keyCode == 37) {
          right();
      }
  });

  document.addEventListener("keydown", (e) => {
      if (e.keyCode == 39 ) {
          right();
      }
  });

  function right() {
      if (i == 0) {
          box1.style.opacity = 1;
          box2.style.opacity = 0;
          box3.style.opacity = 0;
          box4.style.opacity = 0;
          info.innerHTML = "Rock Paper Scissors"
          i++
      }
      else if (i == 1) {
          box1.style.opacity = 0;
          box2.style.opacity = 1;
          box3.style.opacity = 0;
          box4.style.opacity = 0;
          info.innerHTML = "Tic Tac Toe"
          i++
      }
      else if (i == 2) {  
          box1.style.opacity = 0;
          box2.style.opacity = 0;
          box3.style.opacity = 1;
          box4.style.opacity = 0;
          info.innerHTML = "Image 3"
          i++
      }
      else if (i == 3) {
          box1.style.opacity = 0;
          box2.style.opacity = 0;
          box3.style.opacity = 0;
          box4.style.opacity = 1;
          info.innerHTML = "Image 4"
          i = 0;
      }
  }

  function left() {
      if (i == 0) {
          box1.style.opacity = 0;
          box2.style.opacity = 0;
          box3.style.opacity = 0;
          box4.style.opacity = 1;
          info.innerHTML = "Rock Paper Scissors"
          i++
      }
      else if (i == 1) {
          box1.style.opacity = 0;
          box2.style.opacity = 0;
          box3.style.opacity = 1;
          box4.style.opacity = 0;
          info.innerHTML = "Tic Tac Toe"
          i++
      }
      else if (i == 2) {
          box1.style.opacity = 0;
          box2.style.opacity = 1;
          box3.style.opacity = 0;
          box4.style.opacity = 0;
          info.innerHTML = "Image 3"
          i++
      }
      else if (i == 3) {
          box1.style.opacity = 1;
          box2.style.opacity = 0;
          box3.style.opacity = 0;
          box4.style.opacity = 0;
          info.innerHTML = "Image 4"
          i = 0;
      }
  }