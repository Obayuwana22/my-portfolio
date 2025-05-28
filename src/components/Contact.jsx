import React from "react";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="relative bg-[#000D12] pt-5 px-5 xl:px-[120px] ">
      <div className="absolute w-96 h-96 md:w-[500px] md:h-[300px] left-2/4 -translate-x-1/2 -top-20 bg-[#00C8FF3D] transform -rotate-45  blur-[337px]"></div>
      <div className=" text-gray-white flex flex-col gap-12 md:flex-row lg:gap-36">
        <div>
          <div className="mb-5 font-semibold text-[2rem] bg-gradient-to-r from-[#00C8FF] to-[#E6F8FC] bg-clip-text text-transparent xl:text-4xl">
            Contact me for collaboration
          </div>
          <p className="xl:text-3xl font-medium leading-normal tracking-[0.36px] ">
            Ready to launch your next project? Let's explore the possibilities
            together!
          </p>
          <div className="flex flex-col gap-3.5 font-normal leading-normal my-5">
            <div>
              <span className="text-sm">Email: </span>
              <span>successobayuwana@gmail.com</span>
            </div>
            <div>
              <span className="text-sm">Phone: </span>
              <span>09036940150</span>
            </div>
            <div>
              <span className="text-sm">Location: </span>
              <span>Abuja, Nigeria</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/success-obayuwana-312748220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin logo" />
            </a>
            <a
              href="https://x.com/its_success?t=nsp_wWIz7_DSXV9nDhrIMA&s=09"
              target="_blank"
            >
              <img src={x} alt="x logo" />
            </a>

            <div className="flex justify-center items-center">
              <a
                href="https://wa.me/+2349036940150"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
