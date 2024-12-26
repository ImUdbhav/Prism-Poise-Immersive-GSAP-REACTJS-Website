// import React from "react";

// function Clients() {
//   const clientLists = [
//     [
//       "Velvet Veil Collective",
//       "The Avant-Garde Atelier",
//       "Artful Assemblies",
//       "Everyday Dreamers",
//       "Haven Makers Club",
//     ],
//     [
//       "Gilded Horizon Studio",
//       "Radiance Revival Co.",
//       "Creative Connectors",
//       "Kindred Spirits Collective",
//       "Horizon Seekers",
//     ]
//   ];

//   return (
//     <section className="clients py-16">
//       <h2 className="text-center text-4xl font-extrabold text-slate-800 mb-8">
//         Our Community
//       </h2>
//       <p className="text-center text-lg text-slate-700 mb-16 px-8 md:px-32 py-6 tracking-tighter">
//         At <span className="font-semibold text-slate-950">Prism and Poise</span>, our community extends beyond the creative world. We celebrate both everyday individuals and visionary collectives who resonate with our ethos of minimalism, creativity, and connection. Here are some of the incredible people and groups who shape our journey.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
//         {clientLists.map((list, idx) => (
//           <div
//             key={idx}
//             className="bg-white shadow-lg  p-6 border-2 border-dashed border-gray-300 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-50 before:opacity-50 before:z-[-1]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to right, white 50%, rgba(240,240,240,0.7) 50%)",
//               backgroundSize: "100% 2rem",
//               backgroundRepeat: "repeat-y",
//             }}
//           >
//             <h3 className="text-xl font-bold text-slate-800 mb-4">
//               Community Members
//             </h3>
//             <ul className="list-none space-y-2">
//               {list.map((client, cIdx) => (
//                 <li
//                   key={cIdx}
//                   className="text-lg font-medium text-slate-800"
//                 >
//                   {client}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Clients;