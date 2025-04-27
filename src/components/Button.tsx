import { Link } from "react-router-dom";

type ButtonProps = {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
};

const Button = ({ to, onClick, children, variant = "primary", type = "button" }: ButtonProps) => {
  const className = variant === "primary" ? "button-1" : "button-2";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
