import React from "react";
import { Contact } from "../../components";
import { Title } from "../../components/header/styles/header";
import { LocationIcon, MailIcon, PhoneIcon } from "../../icons/icons";

export default function ContactContainer() {
  return (
    <Contact>
      <Contact.Header>
        <Contact.Title>Contact Me</Contact.Title>
        <Contact.Text></Contact.Text>
      </Contact.Header>
      <Contact.Body>
        <Contact.Icons>
          <Contact.IconsItem>
            <PhoneIcon />
            <Contact.IconsTitle>Call Me On</Contact.IconsTitle>
            <Contact.Text>+27 710570811</Contact.Text>
          </Contact.IconsItem>
          <Contact.IconsItem>
            <MailIcon />
            <Contact.IconsTitle>Email Me At</Contact.IconsTitle>
            <Contact.Text email>ryderbright49@gmail.com </Contact.Text>
          </Contact.IconsItem>
          <Contact.IconsItem>
            <LocationIcon />
            <Contact.IconsTitle>Visit Me</Contact.IconsTitle>
            <Contact.Text>703 Tshepong Phase 2</Contact.Text>
          </Contact.IconsItem>
        </Contact.Icons>
      </Contact.Body>
    </Contact>
  );
}
