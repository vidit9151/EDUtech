import Hero1 from "./Hero1";
import Hero2 from "./Hero2";

const HeroContainer = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2  ">
      <div>
        <Hero1 />
      </div>
      <div>
        <Hero2 />
      </div>
    </div>
  );
};

export default HeroContainer;
