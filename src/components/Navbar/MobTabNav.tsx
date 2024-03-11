import { IoCloseSharp } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { hamburgerOpenAtom } from "../../atoms/atom";
import { navLinks } from "./Navlink_Data";
import { Link } from "react-router-dom";
interface navLink {
  id: number;
  title: string;
  to: string;
}

const MobTabNav = () => {
  const setHamburgerOpen = useSetRecoilState(hamburgerOpenAtom);
  return (
    <div className="bg-complementryGrey rounded-tl-2xl w-[50vw] h-[100vh] fixed top-0 right-0 z-10">
      <div
        className="absolute right-3 top-3 text-4xl"
        onClick={() => setHamburgerOpen(false)}
      >
        <IoCloseSharp />
      </div>
      <div className="flex justify-center flex-col  h-[100vh] gap-3 items-center">
        {navLinks.map(({ id, title, to }: navLink) => (
          <div key={id} className="hover:scale-105   ">
            <Link to={to}>{title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobTabNav;
