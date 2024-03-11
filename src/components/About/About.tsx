import aboutImg from "../../assets/About page.svg";
const About = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 justify-center ">
      <div className="p-[2rem]">
        <img src={aboutImg} alt="" />
      </div>
      <div className="lg:bg-white lg:text-black text-white shadow-inner shadow-black bg-lighterPrimaryGreen rounded-t-2xl pt-[1rem] ">
        <h1 className="text-3xl text-center md:pt-[2rem] ">About us</h1>
        <p className="text-center md:text-2xl md:font-thin pt-5 md:p-[2rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab
          ratione ullam, beatae eveniet commodi odit? Nobis natus in reiciendis.
          At quaerat dicta dolore sequi quo? Inventore reiciendis, quam dolores
          sed, odit iste ipsam nostrum consectetur ipsum sit provident, qui ut
          quaerat excepturi explicabo unde! Voluptate assumenda earum
          exercitationem dignissimos?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quo at in nisi cumque velit voluptatum vitae totam
          voluptates officia consequuntur!
        </p>
      </div>
    </div>
  );
};

export default About;
