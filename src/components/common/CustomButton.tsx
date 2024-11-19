type Style = {
  white: string;
  green: string;
  transparent: string;
  transparentWhite: string;
};

interface CustomButtonProps {
  color: keyof Style; // Restrict color to valid keys of Style
  text: string; // Text to be displayed on the button
  [key: string]: any; // Allow additional props
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  color,
  text,
  ...props
}) => {
  const baseStyle: Style = {
    white: "bg-white",
    green: "bg-secondary-dark",
    transparent: "bg-transparent",
    transparentWhite: "bg-transparent",
  };
  const texStyle: Style = {
    green: "text-white",
    white: "text-secondary-dark",
    transparent: "text-secondary-dark",
    transparentWhite: "text-white",
  };
  const iconStyle: Style = {
    green: "bg-white text-secondary-dark",
    white: "bg-secondary-dark text-white",
    transparent: "bg-secondary-dark text-white",
    transparentWhite: "text-secondary-dark bg-white",
  };
  return (
    <button
      className={`flex items-center justify-between p-2 rounded-full w-full cursor-pointer ${baseStyle[color]} `}
      {...props}
    >
      <span className={`pl-3 text-xs  uppercase ${texStyle[color]}`}>
        {text}
      </span>
      <span
        className={`w-6 h-6 rounded-full flex justify-center items-center text-sm ${iconStyle[color]}`}
      >
        &#8594;
      </span>
    </button>
  );
};

export default CustomButton;
