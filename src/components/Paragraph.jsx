import clsx from "clsx";

const Paragraph = ({ children, color = "white", align = "center", size="20px"}) => {
    return (
        <p
            className={clsx(
                "mt-6 max-w-8/10 mx-auto text-xl font-light drop-shadow-[-2px_0px_2px_black] font-monteserrat mb-4",
                `text-${align}`
            )}

            style={{
                color,
                fontSize: size,
            }}>
            {children}
        </p>
    )
};

export default Paragraph;