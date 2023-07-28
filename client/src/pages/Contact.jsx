import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_pptmbpi", "template_pj44f73", form.current, "kAwsawp3eXPLZmKLl").then(
      (result) => {
        console.log(result.text);
        toast.success("Berhasil Mengirim Email!");
        e.target.reset();
      },
      (error) => {
        toast.error(error.text);
      }
    );
  };

  return (
    <div className="w-full md:h-[75vh] h-[80vh]">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">Feel Free To Contact Us</h1>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-1/2  md:h-[450px] rounded-lg shadow-md">
          <form ref={form} onSubmit={sendEmail}>
            <div className="ml-8 md:ml-44 mt-4 ">
              <div className="mb-6">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium  ">
                  Name
                </label>
                <input type="text" id="base-input" name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 p-2.5 " />
              </div>
              <div className="mb-6">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium  ">
                  Email
                </label>
                <input type="email" id="base-input" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 p-2.5 " />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block p-2.5 md:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div className="md:ml-28">
                <button type="submit" className="p-3 md:w-52 border  bg-[#5C8323] rounded-md text-white">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
