type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: Props) => {
  return <button className="btn" {...rest}>{children}</button>;
};

export default Button;
