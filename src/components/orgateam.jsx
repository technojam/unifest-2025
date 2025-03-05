import React from "react";
import "../app/styles/orgateam.css";
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";

const Orgateam = () => {
  return (
    <div className="w-full min-h-[300px] bg-cover bg-center text-white p-8 md:p-12">
      <Heading>Organizing Team</Heading>

      <Paragraph align="left">
        The Galgotias University Student Council is a vibrant community of
        around 11,000 members, bringing students together to make campus life
        exciting and meaningful. With 25+ clubs covering various interests and
        domains, it provides endless opportunities to explore passions, develop
        skills, and collaborate. Acting as a bridge between students and the
        administration, the Council ensures every voice is heard while creating
        a supportive and engaging environment for all.
      </Paragraph>
    </div>
  );
};

export default Orgateam;
