import { Github, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-10 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Email */}
        <p className="text-gray-300 text-center md:text-left">
          Email:{" "}
          <a
            href="mailto:jiveshdixit@cas.iitd.ac.in"
            className="text-green-400 hover:underline"
          >
            jiveshdixit@cas.iitd.ac.in
          </a>
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-500 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-500 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-500 transition"
          >
            <Youtube size={20} />
          </a>

          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-500 transition"
          >
         <Image
  src="/xIndices.webp"
  width={100}
  height={10}
  alt="Profile"
  className="object-cover w-full h-full brightness-0 invert"
/>

          </a>
        </div>
      </div>
    </footer>
  );
}
