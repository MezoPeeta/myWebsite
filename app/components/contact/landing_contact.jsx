import {Form} from 'remix';

function ContactLanding() {
  return (
    <div>
      <div className="mx-auto container text-2xl py-20 ">
        <div className="flex md:justify-center md:flex-row flex-col-reverse gap-40 ">
          <div className="p-5">
            <h1 className="pt-20 lg:text-4xl text-3xl md:text-lg">
              If you're interested , <br /> you can contact me
            </h1>
            <h1 className="md:text-2xl text-xl">
              by completing the form below
            </h1>
          </div>
          <img
            src="/images/contact/mail.svg"
            alt="Contact"
            className="md:w-52 xl:w-96"
            width={300}
          />
        </div>
      </div>
      <div className="xl:py-52 xl:px-96 px-5 flex items-center md:pl-32">
        <Form method="POST" action="/contact">
          <label htmlFor="name" className="text-xl">
            Name
          </label>{" "}
          <br />
          <input
            required
            placeholder="Your name"
            type="text"
            name="name"
            className="border border-black py-5 px-10 rounded-lg w-full focus:ring-4 focus:ring-blue-500"
          />
          <label htmlFor="email" className="mt-10 text-xl">
            Email
          </label>
          <input
            required
            placeholder="Your email"
            type="email"
            name="email"
            id=""
            className="border border-black py-5 px-10 rounded-lg w-full focus:ring-4 focus:ring-blue-500 "
          />
          <label htmlFor="subject" className="mt-10 text-xl">
            Subject
          </label>{" "}
          <br />
          <input
            placeholder="Subject.."
            type="text"
            name="subject"
            id=""
            className="border border-black py-5 px-5 rounded-lg w-full focus:ring-4 focus:ring-blue-500 placeholder:px-5"
          />{" "}
          <br /> <br />
          <label htmlFor="message" className="mt-10 text-xl">
            Message
          </label>{" "}
          <br />
          <textarea
            required
            placeholder="I contact you because ..."
            name="message"
            cols="30"
            rows="10"
            className="border border-black py-5 px-5 rounded-md w-full focus:ring-4 focus:ring-blue-500 placeholder:px-5"
          ></textarea>{" "}
          <br />
          <button
            type="submit"
            className="border border-black py-5 px-14 rounded-full mt-5 text-xl hover:bg-slate-900 hover:text-white "
          >
            Send Email
          </button>
        </Form>
      </div>
    </div>
  );
}

export default ContactLanding;
