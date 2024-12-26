import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img2 from '../assets/img2.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';

gsap.registerPlugin(ScrollTrigger);

function UpcomingEvents() {
  const events = [
    {
      title: "Art & Expression Showcase",
      date: "April 15, 2024",
      description: "An evening celebrating unique artistic creations from local talents.",
      location: "Prism and Poise Gallery, Downtown",
      image: img9 
    },
    {
      title: "Cultural Fusion Workshop",
      date: "May 22, 2024",
      description: "A hands-on workshop exploring cultural influences in modern design.",
      location: "Creative Arts Center, Westside",
      image: img2, 
    },
    {
      title: "Minimalist Fashion Dialogue",
      date: "June 10, 2024",
      description: "A panel discussion with leading voices in minimalist fashion.",
      location: "Virtual Event",
      image: img8, 
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      gsap.fromTo(
        section.querySelectorAll(".event-image img"),
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);


  return (
    <section
      ref={sectionRef}
      className="upcoming-events py-16 bg-gray-900 text-gray-100"
    >
      <h2 className="text-center text-4xl font-extrabold mb-8 ">
        Upcoming Events
      </h2>
      <p className="text-center text-lg mb-12 px-8 md:px-32 tracking-tighter">
        Dive into the world of art, culture, and fashion with our curated events that bring the community together. Mark your calendars and join us to celebrate creativity and connection.
      </p>
      {events.map((event, idx) => (
        <div
          key={idx}
          className={`event-row flex flex-col lg:flex-row items-center gap-8 py-12 px-8 border-b border-gray-700 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
        >
          <div className="event-image flex-1">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-auto shadow-lg transform hover:scale-105 transition-transform"
            />
          </div>
          <div className="event-info flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4 tracking-tighter">{event.title}</h3>
            <p className="text-lg mb-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-lg mb-2">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="text-lg tracking-tighter mt-8">{event.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default UpcomingEvents;
