import { useEffect } from "react";

const CalendlyPopupWidget = ({ text }: { text: string }) => {
  useEffect(() => {
    // Load the Calendly script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to handle the click event and open Calendly popup
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the default link behavior
    //@ts-ignore
    if (window.Calendly) {
      //@ts-ignore
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/enrique-cb/google-reviews", // Your Calendly URL
      });
    }
  };

  return (
    <>
      {/* Calendly Widget CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <a
        href="#"
        onClick={handleClick}
        className="bg-[#20ACCD] w-full text-white py-2 px-2 font-bold tracking-widest border-[2px] border-black  uppercase text-[18px] text-center "
      >
        {text || "Text Missing"}
      </a>
    </>
  );
};

export default CalendlyPopupWidget;
