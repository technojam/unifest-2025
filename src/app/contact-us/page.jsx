"use client";
import Heading from "@/components/ui/Heading";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
        }),
      });
      if (res.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex fadein flex-col gap-10 w-full items-center min-h-screen mt-100 z-10">
      <Heading>Contact Details</Heading>
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>

        {["Name", "Email", "Message"].map((placeholder, index) => (
          <div
            key={index}
            className="w-full h-[60px] flex items-center px-4 bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: "url('/input-field.png')" }}
          >
            <input
              value={formData[placeholder.toLowerCase()]}
              onChange={(e) => setFormData({ ...formData, [placeholder.toLowerCase()]: e.target.value })}
              type={placeholder === "Email" ? "email" : "text"}
              placeholder={placeholder}
              className="w-full bg-[#A50C00] text-white p-2 placeholder-white focus:outline-none rounded-lg"
              disabled={isLoading}
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-[60px] bg-[#DAA12A] text-white font-bold text-lg rounded-lg">
            {isLoading ? "Submitting..." : "Submit"}
          </button>
      </form>
    </div>
  );
}
