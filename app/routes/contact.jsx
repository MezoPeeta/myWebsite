import ContactLanding from "~/components/contact/landing_contact";

import sgMail from '../utils/sendGrid.server.js';

import {Meta, redirect} from "remix";

export const meta = () => {
  const title = "Contact";
  return {
    title,
  };
};


export const action = async ({ request }) => {

  const form = await request.formData();

  const name = form.get("name");
  const subject = form.get("subject");

  const email = form.get("email");

  const message = form.get("message");
  
  const msg = {
    from: 'hardlight555@gmail.com',
    to: "wildlifemain1@gmail.com",
    subject: subject? subject : "Contact",
    html: `
    <h1>Name: ${name} </h1> <br>
    <h1>from:</h1> <br>
    <h1>${email}</h1> <br>
    <h1>Message: </h1><br>
    <h1>${message}</h1>
    `,
  };

  sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error(error)
  });


  return redirect("/contact");
};

function Contact() {

  return (
    <div>
      <Meta />
      <ContactLanding />
    </div>
  );
}

export default Contact;
