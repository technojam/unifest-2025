const teamMembers = [
  {
    graphexLogo: "/graphex-logo.png",
    title: "GU Management Team",
    headTitle: "Club Heads",
    headImage1: "/Head-Images.png",
    headImage2: "/Head-Images.png",
    image: "/ClubPhoto.png",
    headName1: "Head Name",
    headName2: "Head Name",
    description:
      "The GU Management Team is a student body that oversees all events and is made up of members from several University student clubs. \n\n" +
      "The Management Team concept strives to empower student leaders to make a difference by expanding possibilities for their peers while also allowing them to grow as individuals.\n\n" +
      "While a member of the College staff assists the group of passionate student leaders, it is the GMT members who are fully responsible for event management, \n\n" +
      "volunteer provision, and ushering wherever needed at the university's events. Ensuring that the provision is truly student-centered, GMT focuses on bringing in the most registrations, \n\n" +
      "recruiting students to volunteer, organizing matches, managing crowds, and officiating fixtures. The GU Management Team is an important aspect of the student government.",
  },
  {
    graphexLogo: "/graphex-logo.png",
    title: "Stage Management Team",
    headTitle: "Club Heads",
    headImage1: "/Head-Images.png",
    headImage2: "/Head-Images.png",
    headName1: "Head Name",
    headName2: "Head Name",
    image: "/ClubPhoto.png",
    description:
      "Behind every mesmerizing performance lies our exceptional Stage Management Team. At Galgotias University, we are the unsung heroes, working tirelessly behind the scenes to ensure flawless productions that captivate audiences. \n\n" +
      "With precision and dedication, we coordinate rehearsals, manage logistics, and meticulously prepare every detail for the opening event. From early preparations to final cues, our team ensures a seamless and enchanting experience. \n\n" +
      "Our passion for the performing arts and attention to detail lay the foundation for successful productions. We work long hours, arriving early and staying late, handling every aspect of the show. Our expertise allows performers to shine, \n\n" +
      "leaving audiences with unforgettable memories and enhancing Galgotias University's vibrant performing arts community.",
  },
  {
    graphexLogo: "/graphex-logo.png",
    title: "Graphex",
    headTitle: "Club Heads",
    headImage1: "/Head-Images.png",
    headImage2: "/Head-Images.png",
    headName1: "Head Name",
    headName2: "Head Name",
    image: "/ClubPhoto.png",
    description:
      "Galgotias Graphex: Where Creativity Meets Innovation! \n\n" +
      "In a world of pixels, vectors, and boundless imagination, Galgotias University's Graphics Designer Club is a hub of creativity, collaboration, and artistic exploration. \n\n" +
      "Our passionate designers bring ideas to life, offering fresh logos, captivating website designs, dynamic video banners, certificates, and eye-catching social media graphics. \n\n" +
      "Graphex thrives in all design aspects, staying active both online and offline. We constantly explore new trends and techniques, ensuring our designs remain cutting-edge and impactful. \n\n" +
      "For us, design goes beyond aesthetics—it's about crafting experiences that resonate with audiences. Graphics Designer Club: Where design truly comes to life.",
  },
  {
    graphexLogo: "/graphex-logo.png",
    title: "Online Promotions Team",
    headTitle: "Club Heads",
    headImage1: "/Head-Images.png",
    headImage2: "/Head-Images.png",
    headName1: "Head Name",
    headName2: "Head Name",
    image: "/ClubPhoto.png",
    description:
      "Elevate Your Digital Presence with Galgotias University's Online Promotions Team!\n\n" +
      "As a premier society for mastering strategic marketing techniques, we guide you through dynamic learning experiences and uncover the nuances of effective promotion strategies.\n\n" +
      "Our team expertly manages the social media presence of the Galgotias Student Council and its clubs, delivering engaging live streams of university events.\n\n" +
      "We delve into social media algorithms, teaching the art of organic growth—from followers and likes to verified comments.Join us to amplify your profile’s reach, attract a broader audience, and unlock exciting opportunities. \n\n" +
      "Shape your digital journey with the Online Promotions Team and embark on a path to impactful success.",
  },
  {
    graphexLogo: "/graphex-logo.png",
    title: "Cam Circle",
    headTitle: "Club Heads",
    headImage1: "/Head-Images.png",
    headImage2: "/Head-Images.png",
    headName1: "Head Name",
    headName2: "Head Name",
    image: "/ClubPhoto.png",
    description:
      "Galgotias University Cam Circle: Capture the Moment, Make It Last Forever! \n\n" +
      "From group shots to candid moments, Cam Circle is your gateway to unparalleled aesthetics. Every click tells a story, every frame evokes emotion, and every image captures the essence of life. \n\n" +
      "We document events with precision, capturing the aura of every environment. Our journey involves workshops, photo walks, and competitions that broaden our vision and spark creativity. \n\n" +
      "We inspire talent through exhibitions and motivate participation with a keen eye for artistry.In a world where every frame is art, every click is expression, and every photograph is perception, \n\n" +
      "Cam Circle invites you to explore life anew through the lens.",
  },
];

export default function CardsClubHeads({ activeTab }) {
  if (
    activeTab !== "club" ||
    !Array.isArray(teamMembers) ||
    teamMembers.length === 0
  )
    return null;

  return (
    <div >
      {teamMembers.map((member, index) => {
        const isEven = index % 2 === 0;
        const textColor = isEven ? "text-black" : "text-white";
        const bgColor = isEven
          ? "bg-[url('/bgyellow.webp')]"
          : "bg-[url('/bgred.webp')]";


        return (
          <div
            key={member.title}
            className={`relative flex flex-col items-center justify-center min-h-screen ${bgColor} p-6 w-full bg-cover bg-center bg-no-repeat`}
          >
            {/* Top Section - Logo, Title, Head Images */}
            <div className="w-full max-w-6xl flex justify-between items-start relative">
              {/* Graphex Logo (Top Left) */}
              <img
                src={member.graphexLogo}
                alt="Graphex Logo"
                className="w-40 h-auto"
              />

              {/* Title (Centered) */}
              <h2
                className={`absolute left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl font-semibold uppercase ${textColor}`}
              >
                {member.title}
              </h2>

              {/* Head Images & Head Title (Top Right) */}
              <div className="flex flex-col items-center">
                <h3 className={`text-lg md:text-xl font-semibold ${textColor}`}>
                  {member.headTitle}
                </h3>
                <div className="flex gap-4 mt-1">
                  <div className="text-center">
                    <img
                      src={member.headImage1}
                      alt="Head 1"
                      className="w-16 h-16"
                    />
                    <p className={`${textColor} mt-2`}>{member.headName1}</p>
                  </div>
                  <div className="text-center">
                    <img
                      src={member.headImage2}
                      alt="Head 2"
                      className="w-16 h-16 "
                    />
                    <p className={`${textColor} mt-2`}>{member.headName2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Description & Club Image */}
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center mt-10">
              {/* Description (Left Side) */}
              <div className="text-center md:text-left">
                <p
                  className={`text-md leading-relaxed text-lg font-light ${textColor}`}
                >
                  {member.description}
                </p>
              </div>

              {/* Club Image (Right Side) */}
              <div className="flex justify-center">
                <img
                  src={member.image}
                  alt={member.title}
                  className="w-[90%] md:w-[500px] h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
