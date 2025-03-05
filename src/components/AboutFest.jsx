import React from "react";
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";

const AboutFest = () => {
  return (
    <div className="w-full min-h-[300px] bg-cover bg-center text-white p-8 md: p-12 mt-[-200px] z-10 flex flex-col gap-4">
      <Heading >About Galgotias Unifest</Heading>
      <Paragraph align="left" >
        UNIFEST, the annual fest of Galgotias Educational Institutions, is the
        ultimate celebration of talent, creativity, and cultural diversity,
        bringing together the most dynamic and passionate minds under one grand
        platform.
        <br></br>
        <br></br>
        With an exciting lineup of competitions, exceptional performances, and
        musical concerts, it offers a stage where artists, dreamers, and
        performers from various domains come together to express, engage, and
        conquer. Whether it's music, dance, drama, fashion, gaming, literature,
        or tech-based events, Unifest is a melting pot of artistic brilliance
        and intellectual enthusiasm.
        <br></br>
        <br></br>
        Beyond the spotlight, this fest is about the spirit of togetherness,
        pushing boundaries, and creating lifelong memories. It’s a celebration
        that unites students, mentors, and industry leaders, paving the way for
        new opportunities and collaborations.
      </Paragraph>
      <Paragraph color="#E3ED7B" size="24px">
        From ‘Dhamaal’ to ‘Dhoom’ experience every Bollywood genre at UNIFEST-
        The ultimate blockbuster at Galgotias University.
      </Paragraph>
      <Heading>
        21-22
        <br></br>
        March 2025
      </Heading>
    </div>
  );
};

export default AboutFest;
