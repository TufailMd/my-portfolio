import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
} from "react-icons/hi";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gradient-to-br from-[#05060a] via-[#070b1a] to-[#05060a] text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT INFO */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-indigo-400">Get In Touch</h2>

          <Info icon={<HiOutlineMail />} text="jrtufailmd@gmail.com" />
          <Info icon={<HiOutlinePhone />} text="+91 7667013081" />
          <Info icon={<HiOutlineLocationMarker />} text="Vadodara, Gujarat" />
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6"
        >
          {/* MATCH TEMPLATE VARIABLES */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl"
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 py-4 rounded-xl font-semibold"
          >
            Send Message
            <RiSendPlaneFill size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-gray-300">
      <span className="text-indigo-400 text-xl">{icon}</span>
      {text}
    </div>
  );
}
