import NavBar from "@/components/NavBar";
export default function Home() {
  const sponsors = new Array(18).fill("/Frame 22.png");

  return (
    <div>
      <div className=" w-full flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover">
        <div className="relative flex flex-col items-center">
          {/* Black Shadow */}
          <h1
            className="absolute right-1 w-full text-center font-alinore text-[11rem] font-extrabold uppercase tracking-wide text-black md:top-[300px] md:text-[11rem] md:right-1.5 lg:left-4.5 lg:top-[350px] lg:text-[13rem]"
            style={{ zIndex: 0 }}
          >
            OUR SPONSORS
          </h1>

          {/* Main Text */}
          <h1
            className="relative w-full bg-gradient-to-b from-[#FFD700] via-[#D69924] to-[#8B5A2B] bg-clip-text text-center font-alinore text-[10rem] font-medium uppercase tracking-wide text-transparent md:top-[300px] md:text-[11rem] lg:left-6 lg:top-[350px] lg:text-[13rem]"
            style={{ zIndex: 1 }}
          >
            OUR SPONSORS
          </h1>

          <p className=" font-[] md:mt-[270px] lg:mt-[300px] w-full flex items-center justify-center max-w-3xl text-center text-lg font-semibold text-[#FFC93C] md:text-2xl lg:text-2xl">
            Meet the amazing partners who help make Uphoria possible. Their
            support drives our passion for creating unforgettable experiences.
          </p>
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
