import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex-center flex-col md:flex-row p-5 lg:px-16 gap-1 md:gap-5">
      <a href="/">
        <p className="p4_semibold md:p3_semibold underline uppercase">
          LinkedIn
        </p>
      </a>
      <a href="/">
        <p className="p4_semibold md:p3_semibold underline uppercase">Email</p>
      </a>
      <a href="/">
        <p className="p4_semibold md:p3_semibold underline uppercase">GitHub</p>
      </a>
    </div>
  );
};

export default ContactInfo;
