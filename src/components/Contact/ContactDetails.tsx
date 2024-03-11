import { FaPhone } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
const ContactDetails = () => {
  return (
    <>
      <div className="flex px-[40%] pt-[2rem]">
        <FaPhone />
        <p>+9125911972</p>
      </div>
      <br />
      <div className="flex justify-center">
        <FaAddressBook />
        <p>Lucknow</p>
      </div>
    </>
  );
};

export default ContactDetails;
