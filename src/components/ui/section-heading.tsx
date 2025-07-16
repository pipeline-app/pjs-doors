interface SectionHeadingProps {
  firstWord: string;
  secondWord: string;
  firstWordColor?: "orange" | "white" | "dark";
  secondWordColor?: "orange" | "white" | "dark";
  className?: string;
}

export function SectionHeading({ 
  firstWord, 
  secondWord, 
  firstWordColor = "orange",
  secondWordColor = "dark",
  className = ""
}: SectionHeadingProps) {
  const getColorClass = (color: "orange" | "white" | "dark") => {
    switch (color) {
      case "orange":
        return "text-warm-orange";
      case "white":
        return "text-white";
      case "dark":
        return "text-chocolate-brown";
      default:
        return "text-chocolate-brown";
    }
  };

  return (
    <h2 className={`text-4xl lg:text-5xl font-roffene font-black mb-4 leading-none ${getColorClass(firstWordColor)} ${className}`}>
      {firstWord}
      <br />
      <span className={`font-inter font-black ${getColorClass(secondWordColor)}`}>
        {secondWord}
      </span>
    </h2>
  );
}