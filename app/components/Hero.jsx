import React from "react";
import {  Linkedin, Github, YoutubeIcon } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { Icon: Linkedin, link: "https://www.linkedin.com/in/jivesh-dixit-0b237629/" },
  { Icon: Github, link: "https://github.com/JiveshDixit" },
  { Icon: YoutubeIcon, link: "https://www.youtube.com/channel/UCjOxYA2xXTwdJJv14ZKRl2w" },
];

const Hero = () => {
  return (
    <div className="pt-10 pb-20 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hey, I'm Jivesh<span className="text-green-500">!</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8">
          ME IISc | Prime Minister's Research Fellow (PMRF), IIT Delhi | Project Scientist II, NCMRWF
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mb-8 md:mb-12">
  {socialLinks.map(({ Icon, link }, index) => (
    <a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-800 flex items-center justify-center transition hover:bg-green-500"
    >
      <Icon className="text-white" size={24} />
    </a>
  ))}
</div>

        {/* Profile + About Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center md:items-start">
          {/* Profile Image */}
          <div className="md:w-1/3 lg:w-1/4 flex justify-center">
            <div className="w-40 sm:w-52 md:w-60 lg:w-72 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/pic.jpeg"
                width={500}
                height={500}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="md:w-2/3 lg:w-3/4">
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
              Along with my Doctoral studies, I am also working as a Project Scientist II at 
              the National Center for Medium Range Weather Forecasting (NCMRWF) as a part of 
              the Coupled Modelling and S2S forecasting Group. I am in the last phase of my 
              Ph.D. studies. During my Ph.D., I was awarded the Prime Minister's Research 
              Fellow (PMRF) fellowship at IIT Delhi, advised by Prof. Krishna Mirle AchutaRao. 
              My research revolves around Near-term prediction of regional climate. One of the 
              many grand challenges proposed by the World Climate Research Program (WCRP), 
              Near-Term Climate Prediction focuses on improving climate prediction at multi-year 
              to decadal time-scales, aiding decision-makers in planning public policies.
              <br />
              <br />
              I pursued my Master of Engineering (M.E.) from the Indian Institute of Science 
              (IISc.), Bangalore in the Mechanical Engineering (ME) department. My master's 
              project on "Adaptive Mesh Refinement for 3D Multi-component compressible flows" 
              was supervised by Prof. Ratnesh Kumar Shukla. After my M.E., I joined TATA Motors, 
              Engineering Research Center (ERC), Aero-Thermal (CFD) group.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
