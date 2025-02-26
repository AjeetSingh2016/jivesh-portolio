export default function Certifications() {
    const certifications = [
      {
        title: "Linux System Security and Administration",
        issuer: "ISEA (GOI) Project Phase II",
        type: "PDF",
        link: "/certifications/linux-security.pdf",
      },
      {
        title: "Linear Regression with Numpy and Python",
        issuer: "Coursera",
        type: "PDF",
        link: "/certifications/linear-regression.pdf",
      },
      {
        title: "Introduction to Data Science in Python",
        issuer: "Coursera",
        type: "PDF",
        link: "/certifications/data-science.pdf",
      },
      {
        title: "Artificial Intelligence for Earth System Science",
        issuer: "NCAR",
        type: "PDF",
        link: "/certifications/ai-earth-science.pdf",
      },
      {
        title: "Understanding the recommendations of the Task Force on Climate-related Financial Disclosures (TCFD)",
        type: "PDF",
        link: "/certifications/tcfd-recommendations.pdf",
      },
      {
        title: "Introduction to Scenario Analysis",
        type: "PDF",
        link: "/certifications/scenario-analysis.pdf",
      },
      {
        title: "Introduction to ESG",
        type: "Link",
        link: "https://example.com/introduction-to-esg",
      },
    ];
  
    return (
      <section className="py-1 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg border border-gray-700 w-full">
            {/* Title inside the card */}
            <h2 className="text-3xl font-bold text-green-400 mb-4">🎓 Certifications</h2>
  
            <ul className="list-disc list-inside space-y-4 text-white">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <span className="font-semibold">{cert.title}</span> 
                  {cert.issuer && <span className="text-gray-300"> – {cert.issuer}</span>}
                  {" "}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    {cert.type === "PDF" ? "(Open PDF)" : "(Visit)"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
  