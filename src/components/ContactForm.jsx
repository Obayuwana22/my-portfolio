import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    console.log(message);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-10"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xl font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          required
          className="text-[#B7B7B7] py-5 px-4 border border-[#6B6B6B] bg-[rgba(255, 255, 255, 0.04)] rounded-xl font-normal"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xl font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Johndoe@gmail.com"
          required
          className="text-[#B7B7B7] py-5 px-4 border border-[#6B6B6B] bg-[rgba(255, 255, 255, 0.04)] rounded-xl font-normal"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xl font-medium">
          Have a project in mind?
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your next big idea..."
          rows="4"
          required
          className="text-[#B7B7B7] py-5 px-4 border border-[#6B6B6B] bg-[rgba(255, 255, 255, 0.04)] rounded-xl font-normal"
        ></textarea>
      </div>

      <button
        type="submit"
        className="self-end font-medium rounded-xl bg-gradient-to-r from-[#00C8FF] to-[#01313F] py-2 px-3 xl:text-xl xl:py-3 xl:px-4  leading-normal"
      >
        Contact me
      </button>
    </form>
  );
};

export default ContactForm;
