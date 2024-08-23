interface HeadingType {
  className?: string;
  children: React.ReactNode;
}

function Heading({ className = "", children }: HeadingType) {
  return (
    <div className={`${className} space-y-2`}>
      <h3 className="font-lora text-2xl font-bold text-gray-900">{children}</h3>
      <div className="w-20 border-2 border-gray-500 rounded-xl"></div>
    </div>
  );
}

export default Heading;
