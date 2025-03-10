import { SquareArrowOutUpRight } from "lucide-react";

const Blog2 = ({ link = "https://github.com/JiveshDixit/Simple-Catastrophe-Model" }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-10">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-6 flex items-center">
          Understanding Catastrophe Models
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white ml-5 flex justify-center items-center"
          >
            <SquareArrowOutUpRight />
          </a>
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Introduction</h2>
          <p className="text-gray-300">
            Imagine a powerful cyclone making landfall near a densely populated coastal region. 
            How can we assess the potential damage and financial losses? This is where catastrophe models come in. 
            These models help insurers quantify risks, set premiums, and ensure financial preparedness.
          </p>
        </section>

        {/* Components of Catastrophe Model */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Components of Catastrophe Model</h2>
          <p className="text-gray-300">
            Catastrophe models are built on four key components: <strong>Hazard, Vulnerability, Exposure, and Financial</strong>. 
            These work together to provide a comprehensive risk analysis.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-3">
            <li><strong>Hazard:</strong> Simulated event scenarios such as earthquakes, cyclones, or pandemics.</li>
            <li><strong>Vulnerability:</strong> Estimating damage based on asset characteristics.</li>
            <li><strong>Exposure:</strong> Real-world asset data, including location and value.</li>
            <li><strong>Financial:</strong> Calculating potential financial losses.</li>
          </ul>
        </section>

        {/* Model Details */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Catastrophe Model</h2>
          <p className="text-gray-300">
            This model assumes the <strong>Total Insured Value (TIV)</strong> for buildings impacted by cyclone landfall.
            It uses meteorological data from ERA5 reanalysis and exposure data from OpenStreetMap.
          </p>
          <p className="text-gray-300 mt-3">
            The model considers damage due to wind and precipitation, applying a linear decay function for wind-speed away from the cyclone's center. 
            Currently, it calculates <strong>deterministic losses</strong>, but future enhancements could include probabilistic loss metrics.
          </p>
        </section>

        {/* Using the Model */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Using the Model</h2>
          <p className="text-gray-300">
            Try the model with the Jupyter Notebook for <strong>Typhoon Haiyan</strong> or modify parameters to test other cases.
          </p>
        </section>

        {/* References */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">References</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>
              <a href="https://doi.org/10.3390/ijerph191912780" className="text-blue-400 hover:underline">
                Mignan (2022) - Catastrophe Modeling
              </a>
            </li>
            <li>
              <a href="https://doi.org/10.1002/qj.3803" className="text-blue-400 hover:underline">
                Hersbach et al. (2020) - ERA5 Global Reanalysis
              </a>
            </li>
            <li>
              <a href="https://geoffboeing.com/publications/osmnx-paper/" className="text-blue-400 hover:underline">
                Boeing (2024) - OpenStreetMap Analysis
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Blog2;
