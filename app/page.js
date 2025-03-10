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

      {/* Hero Section */}
      <Hero/>

      <Publications/>
      <AchievementsAndSkills/>
      <Certifications/>
      <Footer/>
    </div>
  );
}
