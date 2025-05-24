import React from "react";

const ContactMeForm = () => {
  return (
    <form action="" className="w-full flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xl font-medium">Your Name</label>
        <input type="text" id="name" placeholder="Name" className="text-[#B7B7B7] py-5 px-4 border border-[#6B6B6B] bg-[rgba(255, 255, 255, 0.04)] rounded-xl font-normal"/>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xl font-medium">Your Email</label>
        <input type="email" id="email" placeholder="Email" className="text-[#B7B7B7] py-5 px-4 border border-[#6B6B6B] bg-[rgba(255, 255, 255, 0.04)] rounded-xl font-normal" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xl font-medium">Your Message</label>
        <textarea id="message" placeholder="Message" rows="4" className="text-[#B7B7B7] py-5 px-4 border border-[#6B6B6B] bg-[rgba(255, 255, 255, 0.04)] rounded-xl font-normal"></textarea>
      </div>

      <button className="self-end text-xl font-medium demo-border py-3 px-4 leading-normal">
        Contact me
      </button>
    </form>
  );
};

export default ContactMeForm;
