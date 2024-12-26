import React from "react";

function ProductsServicesEvents() {
  return (
    <section className="products-services-events py-16  mb-14">
      
      <div className="content mt-12 flex flex-col gap-8 px-8 md:flex-row md:gap-16">
        <div className="section w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900">Thoughtful Creations</h3>
          <p className="text-slate-950 text-lg tracking-tighter">
            Discover minimalistic and thoughtfully designed products that reflect a perfect blend of modern aesthetics and cultural inspiration. Each piece tells a story of understated elegance.
          </p>
        </div>
        <div className="section w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900">Personalized Experiences</h3>
          <p className="text-slate-950 text-lg tracking-tighter">
            Engage in services that focus on simplicity and connection, such as personalized recommendations and intimate creative workshops designed to inspire.
          </p>
        </div>
        <div className="section w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900">Community Events</h3>
          <p className="text-slate-950 text-lg tracking-tighter">
            Be part of curated gatherings that celebrate artistic expression and cultural harmony. Our events are intimate and centered around meaningful connections and shared inspiration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductsServicesEvents;
