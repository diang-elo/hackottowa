import React from 'react'
import jQuery from 'jquery'
import { Link } from 'react-router-dom'; 

function Meditate() {

    (function(){
        jQuery(document).on("ready", function(){
            
            var circle = jQuery(".circle");
            var body = jQuery(".body");
            var time;
    
            function startTimer(){
                circle.show(4000);
                body.removeClass("done");
                time = window.setTimeout(function(){
                    circle.hide(5000);
                    body.addClass("done");
                }, 1000 * 60 * 2);
            }
    
            body.on("click", function(){
                startTimer();
            });
    
            startTimer();
        });
    })();

    return (
        <div className="meditatePage">
            <header class="navbar">
        <Link to="/">
        <a  class="logo">"Relief"</a>
        </Link>
        
      </header>

            <section>   
        <div class="containerBubble">
        <div class="circle"></div>   
        </div>
        </section>


        <section class="audio">
            <audio  src="/images/lofi.mp3" controls>	
                <p>Fallback content goes here.</p>
                </audio>
        </section>
        </div>
    )
}

export default Meditate
