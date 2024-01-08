import React from "react";
import { MdOutlineAlternateEmail, MdOutlinePhoneEnabled } from "react-icons/md";
function ContactDetails() {
  const styles = "flex items-center justify-start gap-1";
  return (
    <div className="flex flex-col justify-start gap-2 ">
      <p className={styles}>
        <MdOutlineAlternateEmail />
        craig@davisonmail.co.uk
      </p>
      <p className={styles}>
        <MdOutlinePhoneEnabled />
        07359 828685
      </p>
    </div>
  );
}

export default ContactDetails;
