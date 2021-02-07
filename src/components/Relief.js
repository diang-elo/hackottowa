import React from 'react'
import { Link } from 'react-router-dom'; 


function Relief() {

    

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
    
    return (
        <body>
         <header className="navbar">
        <a href="#home" className="logo">"Relief"</a>
        <ul className="nav">
            <li className="nav__items"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__items"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__items"><a href="#games" className="nav__link">Games</a></li>
            
            <li className="nav__items"><a href="#relief" className="nav__link">Meditate</a></li>
            
            
        </ul>
        <div className="chat_button">
            <Link to="/chat" >Chat Online</Link>
            </div>
      </header>
      
      <div id="home">
        
        <div className="lady">
            <img src="/images/lady_2.1.1.jpg" alt=""/>
            <video  src="/images/sky.mp4" autoPlay loop muted ></video>
        </div>

        <div className="race">
        <h1>THE RAT RACE:
            <span
            className="txt-rotate"
            data-period="2000"
            data-rotate='[ "WORK.", "STRESS.", "SLEEP.", "REPEAT." ]'></span>
        </h1>
        </div>

        <div className="covid_race">
        <h3>Even with COVID-19 recking havoc we are still managing to get 
           <br/> caught up in the rat race. We have created a safe haven
           <br/>  where maybe for once you can escape it.
        </h3>
        </div>
        

     </div>
     
     <div className="about_us_button">
     <a href="#about" className="button behind"><span className="gradient"></span>About Us</a>
     </div>

     <section>

        <div className="about-section" id="about">
            <div className="inner-container">
                <h1>About Us</h1>
                <p className="text">
                    RELIEF is a place for you to take a step back, relax, and collect yourself before getting back into your daily routine. RELIEF has many different ways to help you de-stress, whether your stress is caused by individual, organizational, or environmental factors, we definitely have a way to help you! 
                </p>
                {/*<h3>What We Offer</h3>*/}
                <div className="skills">
                    <span>Freedom</span>
                    <span>Work Relief</span>
                    <span>An Escape</span>
                </div>
            </div>
        </div>

     </section>

    


     <section>
        
        <div className="container" id="games">

            <h1 className="heading"><span>Single Player</span></h1>
        
            <div className="gallery">
        
                <div className="gallery-item">
                    <img className="gallery-image" src="/images/5739_Squre-Composition-38_w1120.jpg" alt=""/>
                </div>
        
                <div className="gallery-item">
                    <img className="gallery-image" src="/images/progress.jpg" alt=""/>
                </div>
        
                <div className="gallery-item">
                    <img className="gallery-image" src="/images/progress.jpg" alt=""/>
                </div>
        
            </div>
        
        </div>

        <div className="container">

            <h1 className="heading"> <span>Multiplayer</span></h1>
        
            <div className="gallery">
        
                <div className="gallery-item">
                    <img className="gallery-image" src="/images/5739_Squre-Composition-38_w1120.jpg" alt=""/>
                </div>
        
                <div className="gallery-item">
                    <img className="gallery-image" src="/images/progress.jpg" alt=""/>
                </div>
        
                <div className="gallery-item">
                    <img className="gallery-image" src="/images/progress.jpg" alt=""/>
                </div>
        
            </div>
        
        </div>
     
     </section>  
    
     
     <section>
        
        <div className="meditate-section" id="relief">
            <div className="inner-meditate-container">
                <h1>Meditate</h1>
                <p className="text">
                    Sometimes the best thing to do when you feel like you're about to explode from stress is to take a few minutes to meditate. Meditation has numerous benifits, including an increase in patience and tolerance, the reduction of negative emotions, increased creativity, and much more. Click on the button below to be directed to calming music to help you start your meditation journey.
                </p>
                
            </div>
        </div>

        <div className="meditate_button">
            <Link to="/meditate" className="button behind"><span className="gradient"></span>Meditate</Link>
            </div>
     </section>


     <div className="container" id="games">

<h1 className="heading"><span>Our Team</span></h1>

<div className="gallery">
        
    <div className="gallery-item">
    <a href="https://www.linkedin.com/in/diangelo-da-silva-ab2656204/" target="_blank">
        <img className="gallery-image" src="/images/dlo3.jpg" alt=""/>
    </a>
    </div>

    <div className="gallery-item">
    <a href="https://www.linkedin.com/in/gilvin-okunimah-557357204/" target="_blank">
        <img className="gallery-image" src="/images/gilvin2.jpg" alt=""/>
        </a>
    </div>

    <div className="gallery-item">
        <img className="gallery-image" src="/images/progress.jpg" alt=""/>
    </div>

</div>

</div>
           


            <footer className="footer">
                <h2>Contact Us</h2>
                 <a href="mailto:gilvinokunimah@gmail.com" className="footer__link">Relief@gmail.com</a>
                 <ul className="social-list">
                     <li className="social-list__item">
                         <a className="social-list__link" href="https://www.instagram.com/gilvinchy">
                             <i className="fab fa-instagram-square"></i>
                         </a>
                     </li>
                     <li className="social-list__item">
                         <a className="social-list__link" href="https://www.linkedin.com/in/gilvin-okunimah-557357204/">
                             <i className="fab fa-linkedin"></i>
                         </a>
                     </li>
                     <li className="social-list__item">
                         <a className="social-list__link" href="https://github.com/Gilvin">
                             <i className="fab fa-github-square"></i>
                         </a>
                     </li>
                 </ul>
             </footer>
        </body>
    )
}

export default Relief
