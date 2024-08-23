function PromotionBanner() {
  return (
    <section className="bg-gray-100">
      <div className="grid grid-cols-2 items-center justify-between w-[80%] mx-auto py-10">
        <div className="text-center">
          <h3 className=" text-xl font-bold text-gray-800">DISCOUNTED</h3>
          <span className="block text-base text-gray-600">wonder sofa</span>
          <div className="flex items-end justify-center">
          <h2 className="text-4xl font-bold text-red-500 me-1">25</h2>
          <div className="text-base font-bold text-gray-600">
            <span>%</span>
            <span>Off</span>
          </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800">On Sale</h3>
        </div>
        <div>
          <img
            className="block h-[300px]"
            style={{ mixBlendMode: "multiply" }}
            src="https://i.pinimg.com/236x/6f/14/3a/6f143aa1512d745e2229212564fc416d.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default PromotionBanner;
