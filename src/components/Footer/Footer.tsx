import Copyright from "./Copyright";
import FooterContact from "./FooterContact";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <div className="relative end-0 flex flex-col bg-complementryBlue text-white">
      <div className=" pt-[2rem] flex flex-col md:flex-row justify-center lg:justify-around items-center">
        <FooterMenu />
        <FooterContact />
      </div>
      <hr />
      <Copyright />
    </div>
  );
};

export default Footer;
