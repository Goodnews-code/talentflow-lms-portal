const Button = ({
  type = "button",
  action,
  icon,
  btnText,
  iconUrl,
  className
}) => {
  return (
    <button
      type={type}
      className={`w-full bg-[#000066] hover:bg-[#000044] py-3 rounded-lg font-bold flex items-center justify-center space-x-2 transition shadow-lg ${className}`}
      onClick={action}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          loading="lazy"
          alt="Google logo"
          className="w-5 h-5"
        />
      )}

      <span>{btnText}</span>
      {icon && icon}
    </button>
  );
};

export default Button;
