import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 justify-center ">
      <div>
        <iframe
          className="p-0 w-[100%] h-[60vh] lg:h-[100%] "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.98710475513!2d80.77769910954919!3d26.848902829339043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710142569790!5m2!1sen!2sin"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      <div className=" lg:py-[20vh] text-white shadow-inner shadow-black bg-lighterPrimaryGreen rounded-t-2xl lg:rounded-t-none pt-[1rem] ">
        <h1 className="text-3xl text-center md:pt-[2rem] ">Contact us</h1>
        <p className="text-center  md:font-thin pt-5 md:p-[2rem]">
          <ContactForm />
          <ContactDetails />
        </p>
      </div>
    </div>
  );
};

export default Contact;
