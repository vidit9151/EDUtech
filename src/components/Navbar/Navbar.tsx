import { useRecoilState } from "recoil";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import { GiHamburgerMenu } from "react-icons/gi";

import { hamburgerOpenAtom } from "../../atoms/atom";
import MobTabNav from "./MobTabNav";
const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useRecoilState(hamburgerOpenAtom);
  return (
    <div className="flex justify-between p-4 bg-primaryGreen items-center  ">
      <div>
        <Logo />
      </div>
      <div className=" hidden md:block">
        <Navlinks />
      </div>
      <div
        className="md:hidden text-2xl"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        {!hamburgerOpen && <GiHamburgerMenu />}
        {hamburgerOpen && <MobTabNav />}
      </div>
    </div>
  );
};

export default Navbar;
