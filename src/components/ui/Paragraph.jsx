import clsx from "clsx";

const sizeClasses = {
  sm: "text-sm sm:text-base",
  md: "text-base sm:text-lg md:text-xl",
  lg: "text-lg sm:text-xl md:text-2xl",
  xl: "text-xl sm:text-2xl md:text-3xl",
  "2xl": "text-2xl sm:text-3xl md:text-4xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const Paragraph = ({ children, color = "white", align = "center", size = "lg", className }) => (
  <p
    className={clsx(
      "w-full sm:w-[85%] md:w-[75%] mx-auto", // layout & sizing
      "mt-6 mb-4", // Spacing
      "font-poppins font-light text-white leading-relaxed", // typography
      "drop-shadow-[-2px_0px_2px_black]", // effects
      sizeClasses[size], // dynamic size
      alignClasses[align], // dynamic alignment
      className // custom overrides
    )}
    style={{ color }}
  >
    {children}
  </p>
);

export default Paragraph;
