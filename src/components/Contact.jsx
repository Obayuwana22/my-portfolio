import React from "react";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactForm from "./ContactForm";
import SubHeading from "./SubHeading";

const Contact = () => {
  return (
    <div className="">
      <div className="text-white flex flex-col gap-12 md:flex-row lg:gap-36 xl:items-center">
        <div>
          <SubHeading subHeading="Let's Connect!" />
          <p className="xl:text-5xl font-medium leading-normal tracking-[0.36px] ">
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
