import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your images
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';
import img7 from '../assets/img7.webp';
import img1 from '../assets/img1.webp';


gsap.registerPlugin(ScrollTrigger);

const HeroImages = () => {
  const rowRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const row = rowRef.current;
    const images = imagesRef.current;

    if (!row || images.length === 0) return;

    const finalClipPaths = [
      "polygon(0% 0%, 33.5% 0%, 33.5% 33%, 0% 33.5%)",
      "polygon(33% 0%, 66.5% 0%, 66.5% 33%, 33% 33.5%)",
      "polygon(66% 0%, 100% 0%, 100% 33%, 66% 33.5%)",
      "polygon(0% 33%, 33.5% 33%, 33.5% 66%, 0% 66.5%)",
      "polygon(33% 33%, 66.5% 33%, 66.5% 66%, 33% 66.5%)",
      "polygon(66% 33%, 100% 33%, 100% 66%, 66% 66.5%)",
      "polygon(0% 66%, 33.5% 66%, 33.5% 100%, 0% 100%)",
      "polygon(33% 66%, 66.5% 66%, 66.5% 100%, 33% 100%)",
      "polygon(66% 66%, 100% 66%, 100% 100%, 66% 100%)"
    ];

    const alternateClipPaths = [
      "polygon(0% 0%, 0% 33%, 33.5% 33%, 33.5% 0%)",
      "polygon(33% 0%, 33% 33%, 66.5% 33%, 66.5% 0%)",
      "polygon(66% 0%, 66% 33%, 100% 33%, 100% 0%)",
      "polygon(0% 33%, 0% 66%, 33.5% 66%, 33.5% 33%)",
      "polygon(33% 33%, 33% 66%, 66.5% 66%, 66.5% 33%)",
      "polygon(66% 33%, 66% 66%, 100% 66%, 100% 33%)",
      "polygon(0% 66%, 0% 100%, 33.5% 100%, 33.5% 66%)",
      "polygon(33% 66%, 33% 100%, 66.5% 100%, 66.5% 66%)",
      "polygon(66% 66%, 66% 100%, 100% 100%, 100% 66%)"
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: "top 60%",
        end: "bottom 70%",
        scrub: 0.4,
      }
    });

    images.forEach((imageWrapper, imageIndex) => {
      const masks = imageWrapper.querySelectorAll('.mask');
      masks.forEach((mask, maskIndex) => {
        tl.to(mask, {
          clipPath: imageIndex % 2 === 0 ? finalClipPaths[maskIndex] : alternateClipPaths[maskIndex],
          duration: 0.6,
          ease: "power1.inOut",
          stagger: 0.1
        }, imageIndex * 0.15);
      });
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const renderMasks = (backgroundImage) => 
    Array.from({length: 9}).map((_, idx) => (
      <div 
        key={idx} 
        className="mask absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)',
          willChange: 'clip-path'
        }}
      />
    ));

  return (
    <section className="hero-imgs mt-32">
      <div ref={rowRef} className="row grid grid-cols-3 gap-8">
        {[img3, img4, img5, img6, img7, img1].map((img, idx) => (
          <div 
            key={idx}
            ref={el => imagesRef.current[idx] = el}
            className="img relative aspect-[3/4] overflow-hidden"
          >
            {renderMasks(img)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroImages;
