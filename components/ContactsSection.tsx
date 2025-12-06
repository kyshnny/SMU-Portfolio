import { FaFacebook, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactsSection() {
  return (
    <section
      id="contacts"
      className="py-20 px-6 w-full bg-gradient-to-br from-[#360185] to-[#5459AC] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-6">CONTACTS</h2>

        {/* DESCRIPTION */}
        <p className="mb-8 text-lg">
          Feel free to reach out to me through my social platforms:
        </p>

        {/* ICONS */}
        <div className="flex justify-center space-x-8 text-4xl">
          <a href="https://facebook.com" target="_blank">
            <FaFacebook className="cursor-pointer hover:scale-110 transition transform" />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope className="cursor-pointer hover:scale-110 transition transform" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin className="cursor-pointer hover:scale-110 transition transform" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram className="cursor-pointer hover:scale-110 transition transform" />
          </a>
        </div>
      </div>
    </section>
  );
}