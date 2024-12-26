
import React from "react";

function Clients() {
  const clientLists = [
    [
      "Velvet Veil Collective",
      "The Avant-Garde Atelier",
      "Artful Assemblies",
      "Everyday Dreamers",
      "Haven Makers Club",
    ],
    [
      "Gilded Horizon Studio",
      "Radiance Revival Co.",
      "Creative Connectors",
      "Kindred Spirits Collective",
      "Horizon Seekers",
    ],
  ];

  const abstractPositions = [
    { top: "10%", left: "19%" },
    { top: "20%", right: "5%" },
    { top: "32%", left: "28%" },
    { top: "43%", right: "28%" },
    { top: "68%", left: "18%" },
    { top: "80%", right: "12%" },
    { top: "6%", right: "28%" },
    { top: "40%", left: "15%" },
    { top: "55%", right: "0%" },
    { top: "77%", left: "37%" },
  ];

  const allClients = clientLists.flat();

  return (
    <section className="clients py-20 relative h-screen mt-[6rem] mb-[12rem]">
      <h2 className="text-center text-4xl font-extrabold text-slate-800 mb-12">
        Our Community
      </h2>
      <p className="text-center text-lg text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed">
        At <span className="font-semibold text-slate-900">Prism and Poise</span>, our community extends beyond the creative world. We celebrate both everyday individuals and visionary collectives who resonate with our ethos of minimalism, creativity, and connection. Here are some of the incredible people and groups who shape our journey.
      </p>
      <div className="relative w-full h-full">
        {allClients.map((client, idx) => (
          <span
            key={idx}
            className="absolute text-lg font-medium text-slate-800"
            style={{
              top: abstractPositions[idx % abstractPositions.length].top,
              left: abstractPositions[idx % abstractPositions.length].left,
              right: abstractPositions[idx % abstractPositions.length].right,
              transform: "translate(-50%, -50%)",
            }}
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Clients;
