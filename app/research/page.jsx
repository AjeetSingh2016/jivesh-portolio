import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import content from '../data/content.json';

export default function Research() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold">Research & Publications</h2>
        <ul className="mt-4">
          {content.publications.map((pub, index) => (
            <li key={index} className="mt-2">
              <a href={pub.link} target="_blank" className="text-blue-500 underline">
                {pub.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
