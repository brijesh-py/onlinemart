interface ButtonType {
  className?: string;
  children: React.ReactNode;
}

function Button({ className = "", children }: ButtonType) {
  return (
    <button
      className={`${className} text-sm text-white bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 active:bg-gray-950`}
    >
      {children}
    </button>
  );
}
export default Button;
