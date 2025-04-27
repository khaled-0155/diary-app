import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#D0E7A3] text-[#1F3B08] pt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 pb-10">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p>Email: Beyond.wildlife@Gmail.Com</p>
          <p>Phone: +44 6537726</p>
          <p>Address: Newcastle</p>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            {["Home", "About", "Diary", "Post", "Credits", "Reviews"].map(
              (label) => (
                <li key={label}>
                  <Link
                    to={`/${label.toLowerCase().replace(" ", "")}`}
                    className="hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:text-[#76A713] cursor-pointer" />
            <FaTwitter className="hover:text-[#76A713] cursor-pointer" />
            <FaInstagram className="hover:text-[#76A713] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#76A713] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#76A713] text-white text-center py-2 text-sm">
        © W22074249 LORA SAFAR. All Rights Reserved
      </div>
    </footer>
  );
}
