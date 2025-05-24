import React from "react";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";
import ContactMeForm from "./ContactMeForm";

const ContactMe = () => {
  return (
    <div className="bg-[#000D12]">
      <div className=" px-[120px] py-16">
        <div className="text-white flex gap-12 items-center">
          <div>
            <div className="text-2xl font-medium">Got a project in mind?</div>
            <p className="text-5xl font-medium leading-normal tracking-[0.36px] text-[#00C8FF]">
              Get in Touch Let's Discuss
            </p>
            <div className="flex flex-col gap-3.5 font-normal leading-normal my-5">
              <div>
                <span className="text-sm">Email:</span>
                <span>successobayuwana@gmail.com</span>
              </div>
              <div>
                <span className="text-sm">Phone:</span>
                <span>09036940150</span>
              </div>
              <div>
                <span className="text-sm">Location:</span>
                <span>Abuja, Nigeria</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img src={linkedin} alt="linkedin logo" />
              <img src={instagram} alt="instagram logo" />
              <img src={x} alt="x logo" />
            </div>
          </div>

          <ContactMeForm />
        </div>
      </div>
      <div className="text-[#6B6B6B] text-center border-t-1 border-[#6B6B6B] py-5">Copyrights@2025</div>
    </div>
  );
};

export default ContactMe;
