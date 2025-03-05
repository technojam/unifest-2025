import Heading from "@/components/ui/Heading";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 w-full items-center min-h-screen mt-100 z-10">
      <Heading>Contact Details</Heading>
      <form className="w-full max-w-md space-y-4">

        {["Full Name", "Email", "Message"].map((placeholder, index) => (
          <div
            key={index}
            className="w-full h-[60px] flex items-center px-4 bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: "url('/input-field.png')" }}
          >
            <input
              type={placeholder === "Email" ? "email" : "text"}
              placeholder={placeholder}
              className="w-full bg-[#A50C00] text-white p-2 placeholder-white focus:outline-none rounded-lg"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full h-[60px] bg-[#DAA12A] text-white font-bold text-lg rounded-lg">
            Submit
          </button>
      </form>
    </div>
  );
}
