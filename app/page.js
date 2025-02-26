import Image from "next/image";
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import Publications from "./components/Publication";
import AchievementsAndSkills from "./components/AchievementsAndSkills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-red-500 text-white min-h-screen font-sans magicpattern parent">

      {/* Navbar */}
     <Navbar/>

      {/* Hero Section */}
      <Hero/>


      {/* Education Section
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <h3 className="text-3xl font-bold col-span-1">Education</h3>
          <div className="col-span-2 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold">
                MSc in Research Methodology
              </h4>
              <p className="text-gray-400">September 2000 - May 2004</p>
              <p className="text-gray-400">University Of California</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">
                BEng Electronic Engineering
              </h4>
              <p className="text-gray-400">September 2000 - May 2004</p>
              <p className="text-gray-400">University Of California</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Expertise Section */}
      {/* <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <h3 className="text-3xl font-bold col-span-1">Expertise</h3>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Data Analysis & Visualization",
                details: ["pandas, numpy", "Tableau, Seaborn"],
              },
              {
                title: "Statistical Methods",
                details: ["Hypothesis Testing", "Regression Analysis"],
              },
              {
                title: "Machine Learning",
                details: ["Scikit-Learn", "TensorFlow, PyTorch"],
              },
              {
                title: "Big Data & Cloud",
                details: ["Apache Spark", "AWS, Google Cloud"],
              },
              {
                title: "Deep Learning",
                details: ["CNNs, RNNs", "Transformers"],
              },
              {
                title: "Natural Language Processing",
                details: ["NLTK, SpaCy", "BERT, GPT"],
              },
            ].map((item, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold">{item.title}</h4>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Publications/>
      <AchievementsAndSkills/>
      <Certifications/>
      <Footer/>
    </div>
  );
}
