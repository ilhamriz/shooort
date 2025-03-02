import { cva } from "class-variance-authority";
import { BeatLoader } from "react-spinners";

const variant = cva("button", {
  variants: {
    intent: {
      primary:
        "bg-blue-600 hover:bg-blue-700 border-[1px] border-blue-600 text-white cursor-pointer",
      primary_disable:
        // "bg-gray-200 border-[1px] border-gray-200 text-gray-400 cursor-not-allowed",
        "bg-muted border-[1px] border-muted text-gray-400 cursor-not-allowed",
    },
    size: {
      medium:
        "text-center font-semibold text-sm tracking-wide py-3 px-8 rounded-lg transition-all duration-300",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Button = ({
  intent = "primary",
  className,
  loading,
  children,
  ...props
}) => {
  return (
    <button type="submit" className={variant({ intent, className })} {...props}>
      {loading ? <BeatLoader size={7} color={"#FFFFFF"} /> : children}
    </button>
  );
};

export default Button;
