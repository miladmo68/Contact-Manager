import React from "react";
import { ContactType } from "../_types/contact";

const ContactForm = () => {
  type ContactFormProps = {
    contact?: ContactType;
    action: (prevState: any, formData: FormData) => Promise<any>;
  };
  const ContactForm = ({ contact, action }: ContactFormProps) => {
    return <div>ContactForm</div>;
  };
};

export default ContactForm;
