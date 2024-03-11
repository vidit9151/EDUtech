import hero1 from "../../assets/Hero 1.svg";
import hero1Mobile from "../../assets/Hero 1 mobile.svg";
const Hero1 = () => {
  return (
    <div className="pt-[4rem] bg-primaryGreen pb-8 md:rounded-bl-full ">
      <img src={hero1} alt=" hero 1" className="  hidden md:block " />
      <img
        src={hero1Mobile}
        alt="hero mobile"
        className="md:hidden h-[50vh] w-[100vw]  "
      />
    </div>
  );
};

export default Hero1;
