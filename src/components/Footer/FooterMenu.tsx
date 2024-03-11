import { Link } from "react-router-dom";
import { FooterMenuLinks } from "./FooterMenuLinksData";

const FooterMenu = () => {
  return (
    <div className="flex flex-col gap-3 font-semiboldold items-center">
      <h1 className="text-xl font-bold leading-3 ">Links</h1>

      {FooterMenuLinks.map(({ id, title, to }) => (
        <div key={id} className="hover:scale-105   ">
          <Link to={to}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;
