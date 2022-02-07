import ContactLanding from "~/components/contact/landing_contact";

import nodemailer from "nodemailer";

import { Meta, redirect } from "remix";

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

  var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 457,
    secure: true,
    service: "gmail",
    auth: {
      user: "wildlifemain1@gmail.com",
      pass: "iditkanzwjhkxojx",
    },
  });

  transporter.sendMail({
    from: email,
    to: "wildlifemain1@gmail.com",
    subject: subject? subject : "Contact",
    html: `
    <h1>from:</h1> <br>
    <h1>${email}</h1> <br>
    <h1>Message: </h1><br>
    <h1>${message}</h1>
    `,
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
