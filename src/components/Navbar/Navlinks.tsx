import { Link } from "react-router-dom";
import { navLinks } from "./Navlink_Data";
interface navLink {
  id: number;
  title: string;
  to: string;
}
const Navlinks = () => {
  return (
    <div className="flex gap-3 font-semiboldold">
      {navLinks.map(({ id, title, to }: navLink) => (
        <div key={id} className="hover:scale-105  ">
          <Link to={to}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
