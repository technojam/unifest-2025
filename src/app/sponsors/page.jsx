import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
export default function Home() {
  const sponsors = new Array(18).fill("/Frame 22.png");

  return (
    <div>
   
      <div className=" w-full flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center h-screen justify-center">
          <Heading>OUR SPONSORS</Heading>
          <Paragraph className={"text-[#E3ED7B]"}>
            Meet the amazing partners who help make Uphoria possible. Their
            support drives our passion for creating unforgettable experiences.
          </Paragraph>
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="mt-30 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12">
            {sponsors.map((src, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={src}
                  alt="Sponsor Logo"
                  className="w-[364px] h-[364px] object-contain pb-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
