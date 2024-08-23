import Button from "./common/Button";

function HeroSection() {
  return (
    <section className="bg-gray-100">
      <div className="grid grid-cols-2 items-center justify-between w-[80%] mx-auto py-10">
        <div className="space-y-5">
          <h2 className="font-lora text-3xl text-gray-800 leading-7 ">
            Comfortable sofa with great comfort
          </h2>
          <p className="text-gray-600 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam
            dolores, inventore eius quidem odit sequi a nobis. Doloremque
            ducimus quaerat rerum facere itaque assumenda recusandae beatae
            nobis numquam labore.
          </p>
          <Button>Show Now</Button>
        </div>
        <div>
          <img
            className="block h-[400px]"
            style={{ mixBlendMode: "multiply" }}
            src="https://i.pinimg.com/236x/23/1c/c6/231cc64890f6c3722010e18343f8575c.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
