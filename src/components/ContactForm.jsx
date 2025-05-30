import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

emailjs.init("bengvc8r_f8mSvQUv");

const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_upbxogd",
        "template_9pxmz5r",
        form.current,
        "bengvc8r_f8mSvQUv"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-10 z-50"
      >
        <input type="hidden" name="title" value="Form Submission" />

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xl font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            name="email"
            placeholder="Johndoe@gmail.com"
            required
            className="text-[#B7B7B7] py-5 px-4 border border-[#6B6B6B] bg-[rgba(255, 255, 255, 0.04)] rounded-xl font-normal"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xl font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Describe your next big idea..."
            rows="4"
            required
            className="text-[#B7B7B7] py-5 px-4 border border-[#6B6B6B] bg-[rgba(255, 255, 255, 0.04)] rounded-xl font-normal"
          ></textarea>
        </div>

        <button
          type="submit"
          className="self-end font-medium rounded-xl bg-[#01313F] py-2 px-3 xl:text-xl xl:py-3 xl:px-4 leading-normal cursor-pointer hover:bg-[#01313fa1] hover:transition-all hover:duration-300 hover:ease-in-out"
        >
          Send message
        </button>
      </form>

      <ToastContainer style={{ marginTop: "5em" }} />
    </>
  );
};

export default ContactForm;
