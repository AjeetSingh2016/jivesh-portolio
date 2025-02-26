import React from "react";
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="pt-10 pb-20 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h1 className="text-6xl font-bold mb-4">
          Hey, I'm Jivesh<span className="text-green-500">!</span>
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
        ME IISc | Prime Minister's Research Fellow (PMRF), IIT Delhi | Project Scientist II, NCMRWF
        </p>

        <div className="flex justify-center md:justify-start space-x-4 mb-12">
          {[Facebook, Twitter, Linkedin, Github, Instagram].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center transition hover:bg-green-500"
              >
                <Icon className="text-white" size={24} />
              </a>
            )
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center md:items-start">
          <div className="md:w-1/4 flex justify-center">
            <div className="h-full w-50 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/pic.jpeg"
                width={500}
                height={500}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-3/4">
            <p className="text-gray-400 leading-relaxed">
              Along with my Doctoral studies I am also working as a Project
              Scientist II at National Center for Medium Range Weather
              Forecasting (NCMRWF) as a part of Coupled Modelling and S2S
              forecasting Group. I am in the last phase of my Ph.D. studies.
              During my PhD I was awarded Prime Minister's Research Fellow
              (PMRF) fellowship at IIT Delhi advised by Prof. Krishna Mirle
              AchutaRao. My research is pivoted around Near-term prediction of
              regional climate. Broadly, one of the many grand challenges
              proposed by World Climate Research Program (WCRP), Near-Term
              Climate Prediction focuses on the improvement of climate
              prediction at multi-year to decadal time-scales, which can be
              beneficial to the decision makers and the stakeholders for planing
              and execution of public policies. I pursued my Master of
              Engineering (M.E.) from Indian Institute of Science (IISc.),
              Bangalore in Mechanical Engineering (ME) department. My masters
              project on "Adaptive Mesh Refinement for 3D Multi-component
              compressible flows" was supervised by Prof. Ratnesh Kumar Shukla.
              After my M.E. I joined TATA Motors, Engineering Research Center
              (ERC), Aero-Thermal (CFD) group.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
