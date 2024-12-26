
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import img5 from '../assets/img10.webp'

function Hero() {
  const h1Ref = useRef(null); 
  const imgContainerRef = useRef(null); 

  useEffect(() => {
    const letters = h1Ref.current.querySelectorAll("span");

    
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0, 
        stagger: 0.05, 
        duration: 1, 
        ease: "power4.out", 
      }
    );

    
    gsap.fromTo(
      imgContainerRef.current,
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0, 
        duration: 1.5, 
        ease: "power4.out",
        delay: 1, 
      }
    );
  }, []);

  const text = "Prism & Poise";

  return (
    <section className="h-[120vh] flex flex-col items-center justify-center mt-36">
      <h1
        ref={h1Ref}
        className="text-[12vw] text-slate-900 uppercase font-space font-medium tracking-tighter"
      >
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
     
      <div
        ref={imgContainerRef}
        className="mt-10 w-full max-w-4xl overflow-hidden rounded-lg"
      >
        <img
          src={img5} 
          alt="Hero Image"
          className="w-full h-fit object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
