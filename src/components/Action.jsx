import { cva } from "class-variance-authority";

const variant = cva("button", {
  variants: {
    intent: {
      primary:
        "bg-blue-100 border-[1px] border-blue-100 hover:bg-blue-200 text-action-primary",
      secondary:
        "bg-transparent border-[1px] border-action-border hover:bg-action-hover text-text-primary",
    },
    size: {
      medium:
        "h-fit p-2 rounded-md flex items-center gap-1 text-xs font-semibold cursor-pointer transition-all duration-300",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Action = ({ name, icon, intent = "secondary", className, ...props }) => {
  return (
    <button type="button" className={variant({ intent, className })} {...props}>
      {icon && <div className="">{icon}</div>}
      <span>{name}</span>
    </button>
  );
};

export default Action;
