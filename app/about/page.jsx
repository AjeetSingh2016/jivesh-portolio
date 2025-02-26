import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import content from '../data/content.json';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4">{content.about}</p>
      </main>
      <Footer />
    </div>
  );
}
