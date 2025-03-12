const teamMembers = [
  {
    // 1
    name: "Agastya Akash",
    role: "VICE-PRESIDENT(Event)",
    email: "",
    phone: "+91 80848 15655",
    image:
      "/coreTeam/agastya.jpg",
    description:
      "In my first year, I hardly remember which club I was part of, and I was quite an inactive member. However, things changed in my second year when I joined Lingofreaks as my first official club. I became more active, thanks to my classmate, the current Vice President (Social Media) of the Law Council, who introduced me to the council.\n\n" +
      "During the last Unifest, I was the most active I had ever been in my entire journey with the council. It was then that my friend, Abhishek Suman, the current Head of GMT, encouraged me to join GMT. Joining GMT was a turning point as it opened the doors to the council for me. I worked hard, and soon, I was honored with the golden opportunity to serve as the President of the Law Department. Following that, I was entrusted with the role of Vice President (Events).\n\n" +

      "This Unifest holds a special place in my heart—it’s both an emotion and a responsibility. It’s an emotion because any core member of GUSC feels a deep connection with Unifest. It’s also a responsibility to make this Unifest grander than ever before, and I genuinely hope to live up to that expectation.\n\n" 
      ,
  },
  {
    // 2
    name: "Aditya Prakash",
    role: "VICE-PRESIDENT(Cultural)",
    email: "adityaprakash3162@gmail.com",
    phone: "+91-85214 57111",
    image:
      "/coreTeam/adityaPrakash.jpg",
    description:
      "I Aditya Prakash am a dynamic leader serving as the Vice President (Cultural) and President (Management) of Galgotias University Student Council. As an MBA student specializing in Finance & HR, I bring a strategic mindset and creative vision to student events, ensuring an engaging and inclusive campus experience.\n\n" +

      "As Vice President (Cultural), I spearhead cultural events, festivals, and talent showcases, fostering artistic expression and student engagement. In my role as President (Management), I oversee organizational planning, resource allocation, and team coordination, ensuring seamless execution of university initiatives.\n\n" +
      "Beyond leadership, I am an entrepreneur, human resource enthusiast, and a musician with 19+ songs on Spotify and YouTube. My vision for UNIFEST is to elevate cultural experiences, nurture talent, and create an inspiring platform for students. With my blend of strategic leadership and creative passion, I continue to leave a lasting impact on the Galgotias University community.",
  },

  {
    // 3not original forom here
    name: "Adil Ali Khan",
    role: "",
    email: "",
    phone: "+91 87579 09501",
    image:
      "",
    description:
      "In the verdant realms of learning, I, Nikunj, cultivate the fields of academia as an agriculture student, and my heart blossoms with zeal as the President (General Secretary) of Galgotias University.\n\n" +
      "My journey commenced as a humble member, steadily climbing the ladder to become a coordinator, and finally, finding myself honoured to lead as the head and now proudly as the President of our esteemed student council. This path has been a tapestry of challenges and opportunities, weaving invaluable experiences that have nurtured my growth.\n\n" +
      "As the president, I feel immensely privileged to share this transformative journey with my esteemed colleagues and dedicated members. The experience has instilled in me valuable attributes, from discipline to learning from failures and cherishing successes. I aspire to keep learning and wholeheartedly contribute to our university's betterment, fostering a welcoming environment where students can channel their creativity and talents.\n\n" +
      "With an unwavering commitment to our shared mission, let us stand as an integral force, driving our cherished student council's soaring success and holistic development.\n\n" +
      '"In the tapestry of my three transformative years, I unearthed the profound truth: through unwavering toil, the world bows to your will, and destiny cannot resist leading you to the realm where you truly belong." - Nikunj.',
  },
  {
    // 4 not original discription from here
    name: "Aryan Tyagi",
    role: "Vice-President(Treasurer)",
    email: "",
    phone: "+91 93197 60076",
    image:
      "/coreTeam/AryanTyagi.jpg",
    description:
      "In the verdant realms of learning, I, Nikunj, cultivate the fields of academia as an agriculture student, and my heart blossoms with zeal as the President (General Secretary) of Galgotias University.\n\n" +
      "My journey commenced as a humble member, steadily climbing the ladder to become a coordinator, and finally, finding myself honoured to lead as the head and now proudly as the President of our esteemed student council. This path has been a tapestry of challenges and opportunities, weaving invaluable experiences that have nurtured my growth.\n\n" +
      "As the president, I feel immensely privileged to share this transformative journey with my esteemed colleagues and dedicated members. The experience has instilled in me valuable attributes, from discipline to learning from failures and cherishing successes. I aspire to keep learning and wholeheartedly contribute to our university's betterment, fostering a welcoming environment where students can channel their creativity and talents.\n\n" +
      "With an unwavering commitment to our shared mission, let us stand as an integral force, driving our cherished student council's soaring success and holistic development.\n\n" +
      '"In the tapestry of my three transformative years, I unearthed the profound truth: through unwavering toil, the world bows to your will, and destiny cannot resist leading you to the realm where you truly belong." - Nikunj.',
  },
  {
    // 5 not original discription here
    name: "Abhishek Kumar",
    role: "Vice-President(Social-Media)",
    email: "",
    phone: "+91 88252 43596",
    image:
      "",
    description:
      "In the verdant realms of learning, I, Nikunj, cultivate the fields of academia as an agriculture student, and my heart blossoms with zeal as the President (General Secretary) of Galgotias University.\n\n" +
      "My journey commenced as a humble member, steadily climbing the ladder to become a coordinator, and finally, finding myself honoured to lead as the head and now proudly as the President of our esteemed student council. This path has been a tapestry of challenges and opportunities, weaving invaluable experiences that have nurtured my growth.\n\n" +
      "As the president, I feel immensely privileged to share this transformative journey with my esteemed colleagues and dedicated members. The experience has instilled in me valuable attributes, from discipline to learning from failures and cherishing successes. I aspire to keep learning and wholeheartedly contribute to our university's betterment, fostering a welcoming environment where students can channel their creativity and talents.\n\n" +
      "With an unwavering commitment to our shared mission, let us stand as an integral force, driving our cherished student council's soaring success and holistic development.\n\n" +
      '"In the tapestry of my three transformative years, I unearthed the profound truth: through unwavering toil, the world bows to your will, and destiny cannot resist leading you to the realm where you truly belong." - Nikunj.',
  },
];

export default function CardsCoreTeam({ activeTab }) {
  return (
    <div className="flex flex-col">
      {activeTab === "core" &&
      Array.isArray(teamMembers) &&
      teamMembers.length > 0
        ? teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center min-h-screen  ${
                index % 2 === 0
                  ? "md:flex-row fill bg-[url('/bgyellow.webp')]"
                  : "md:flex-row-reverse bg-[url('/bgred.webp')]"
              } p-6 w-full bg-cover bg-center bg-no-repeat`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full sm:w-[530px] h-auto sm:h-[610px] object-cover rounded-lg"
                />
              </div>
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-2 h-auto sm:h-[610px]">
                <h2
                  className={`text-4xl font-medium w-full sm:w-[345px] font-poppins mt-0 h-auto sm:h-[64px] leading-[64px] tracking-[3%] uppercase ${
                    index % 2 === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {member.name}
                </h2>
                <p
                  className={`text-md font-montserrat font-medium leading-[31.8px] tracking-[-6%] ${
                    index % 2 === 0 ? "text-[#A50C00]" : "text-[#FFF893]"
                  }`}
                >
                  {member.role}
                </p>
                <p
                  className={`text-md font-montserrat font-normal leading-[20.7px] tracking-[-6%] ${
                    index % 2 === 0 ? "text-[#A50C00]" : "text-[#FFF893]"
                  }`}
                >
                  {member.email}
                </p>
                <p
                  className={`text-md font-montserrat font-normal leading-[20.7px] tracking-[-6%] ${
                    index % 2 === 0 ? "text-[#A50C00]" : "text-[#FFF893]"
                  }`}
                >
                  {member.phone}
                </p>
                <p
                  className={`text-md w-[90%] leading-[24.2px] font-light font-poppins tracking-wide text-justify mt-5 ${
                    index % 2 === 0 ? "text-black" : "text-white"
                  }`}
                >
                  {member.description}
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}