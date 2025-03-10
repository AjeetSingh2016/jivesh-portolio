import { ExternalLink } from "lucide-react";

const publications = [
  {
    year: "2018",
    title: "Experimental Investigation of Thermal Energy Storage System for Hot Air Applications",
    authors: "Negi P., Singh S., Sharma K., Dixit J., Kumar S.",
    source: "Springer Transactions in Civil and Environmental Engineering",
    link: "https://doi.org/10.1007/978-981-10-7122-5_12",
  },
  {
    year: "2021",
    title: "Experimental analysis based parametric study of packed bed heat regenerator with air as passing medium",
    authors: "Prateek Negi, Yashvir Singh, Jivesh Dixit, Manoj Gwalwanshi, Ravi Kanojia",
    source: "Materials Today: Proceedings, Volume 46, Part 20",
    link: "https://doi.org/10.1016/j.matpr.2020.12.1193",
  },
  {
    year: "2022",
    title: "Influence of Climatology definition on the Prediction skill of CMIP6 Decadal hindcast experiments",
    authors: "Presented at AGU Annual Meeting",
    source: "Oral Presentation (Certificate)",
    link: "https://ui.adsabs.harvard.edu/abs/2022AGUFMGC22C..05D/abstract",
  },
  {
    year: "2023",
    title: "Representation of relationship between PDO and global precipitation in CMIP6 models",
    authors: "Presented at EGU General Assembly",
    source: "Oral Presentation",
    link: "https://doi.org/10.5194/egusphere-egu23-15027",
  },
  {
    year: "2024",
    title: "Relationship of the predictability of North Pacific Mode and ENSO with predictability of PDO",
    authors: "Presented at EGU General Assembly",
    source: "Poster Presentation",
    link: "https://doi.org/10.5194/egusphere-egu24-868",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Publications</h2>
        <div className="relative border-l-4 border-green-500">
          {publications.map((publication, index) => (
            <div key={index} className="mb-8 pl-6 relative">
              {/* Timeline Circle */}
              <div className="absolute left-[-10px] w-5 h-5 bg-green-500 rounded-full"></div>

              {/* Year */}
              <div className="text-lg font-semibold text-green-400">{publication.year}</div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mt-2">{publication.title}</h3>
              <p className="text-gray-400">{publication.authors}</p>
              <p className="text-green-400 italic">{publication.source}</p>

              {/* Link */}
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 flex items-center mt-2 hover:text-green-400 transition"
              >
                View Publication <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
