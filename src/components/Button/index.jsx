export const Button = ({ children, outlined, className = '', ...props }) => {
  return (
    <button
      className={`${outlined ? "outlined" : "button"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
