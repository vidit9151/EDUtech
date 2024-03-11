import { Link } from "react-router-dom";
import errImg from "../../assets/err404.svg";
const Err404 = () => {
  return (
    <div className=" py-[5rem] flex flex-col items-center">
      <Link to="/">
        <button className="pb-10  ">
          click here to navigate to Home page...
        </button>
      </Link>
      <img src={errImg} className="" alt="" />
      <br />
    </div>
  );
};

export default Err404;
