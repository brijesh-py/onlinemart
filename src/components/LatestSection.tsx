import Heading from "./common/Heading";
import LatestCard from "./common/LatestCard";

function LatestSection() {
  return (
    <section className="space-y-5">
      <Heading>Latest Products</Heading>
      <div className="grid grid-cols-5 gap-5">
        <LatestCard></LatestCard>
        <LatestCard></LatestCard>
        <LatestCard></LatestCard>
        <LatestCard></LatestCard>
        <LatestCard></LatestCard>
      </div>
    </section>
  );
}

export default LatestSection;
