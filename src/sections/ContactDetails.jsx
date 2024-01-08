import React from "react";
import { MdOutlineAlternateEmail, MdOutlinePhoneEnabled } from "react-icons/md";
function ContactDetails() {
  const styles = "flex items-center justify-start gap-1";
  return (
    <div className="z-50 flex flex-col justify-start gap-2 ">
      <p className={styles}>
        <MdOutlineAlternateEmail />
        <a className="pointer" href="mailto:craig@davisonmail.co.uk">
          craig@davisonmail.co.uk
        </a>
      </p>
      <p className={styles}>
        <MdOutlinePhoneEnabled />
        <a className="pointer" href="tel:07359828685">
          07359 828685
        </a>
      </p>
    </div>
  );
}

export default ContactDetails;
