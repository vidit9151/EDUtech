import { useRecoilState } from "recoil";
import { emailContactAtom, queryContactAtom } from "../../atoms/atom";

const ContactForm = () => {
  const [email, setEmail] = useRecoilState(emailContactAtom);
  const [query, setQuery] = useRecoilState(queryContactAtom);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault;
          if (!email || !query) {
            return;
          }
          setEmail("");
          setQuery("");
        }}
      >
        <label htmlFor="e-mail">E-mail : </label>
        <input
          className="text-black lg:border-2 lg:text-xl  rounded-lg border-gray-500"
          type="email"
          id="e-mail"
          placeholder="e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="qwery">Qwery : </label>
        <textarea
          className="text-black lg:border-2 lg:text-xl border-gray-500 rounded-lg"
          id="qwery"
          cols={25}
          rows={2}
          value={query}
          onChange={(e) => {
            setQuery(e.currentTarget.value);
          }}
          placeholder="Write your query"
        ></textarea>
        <br />
        <button type="submit" className="bg-secondaryGreen p-2 mt-2 rounded-xl">
          Submit form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
