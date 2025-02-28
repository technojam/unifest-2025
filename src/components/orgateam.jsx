import React from "react";
import "../app/styles/orgateam.css"; 

const Orgateam = () => {
  return (
    <div className="relative w-full min-h-[300px] bg-cover bg-center text-white p-8 md:p-12 
    ">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#D69924] to-yellow-400 text-7xl md:text-7xl font-bold text-center uppercase tracking-wider drop-shadow-xl font-alinore ">
        Organising Team
      </h1>

      <p className="mt-6 text-center max-w-8/10 mx-auto text-xl font-light leading-relaxed 
      drop-shadow-xl font-montesaro">
        The Galgotias University Student Council is a vibrant community of
        around 11,000 members, bringing students together to make campus life
        exciting and meaningful. With 25+ clubs covering various interests and
        domains, it provides endless opportunities to explore passions, develop
        skills, and collaborate. Acting as a bridge between students and the
        administration, the Council ensures every voice is heard while creating
        a supportive and engaging environment for all.
      </p>
    </div>
  );
};

export default Orgateam;
