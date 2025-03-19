import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
export default function Home() {
  const sponsors = new Array(18).fill("/Frame 22.png");

  return (
    <div className="fadein"> 
      <div className=" w-full flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center h-screen justify-center">
         <h2 className="font-[Alinore] headingbg font-bold text-center uppercase tracking-wider drop-shadow-[-6px_-2px_0px_black] text-4xl sm:text-5xl md:text-6xl lg:text-8xl px-4 ">
          Sponsors
        </h2>
          <Paragraph color="#E3ED7B]">
            Meet the amazing partners who help make Unifest possible. Their
            support drives our passion for creating unforgettable experiences.
          </Paragraph>
        </div>
 <Paragraph color="#E3ED7B]">Coming Soon</Paragraph>
        <div className="flex flex-col items-center w-full">
          <div className="mt-30 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12">
            {/* {sponsors.map((src, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={src}
                  alt="Sponsor Logo"
                  className="w-[364px] h-[364px] object-contain pb-12"
                />
              </div>
            ))} */}
           
          </div>
        </div>
      </div>
    </div>
  );
}
