import { SquareArrowOutUpRight } from "lucide-react";

const Blog3 = ({ link = "https://xindices.readthedocs.io/en/latest/" }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-10">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-6 flex items-center">
          xIndices: A Comprehensive Tool for Climate Variability Analysis
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
          <h2 className="text-2xl font-semibold text-green-300 mb-2">What is xIndices?</h2>
          <p className="text-gray-300">
            Climate change is one of the most pressing issues of our time, and understanding its effects 
            requires sophisticated analytical tools. <strong>xIndices</strong> is a powerful Python library 
            designed to compute **Sea Surface Temperature (SST) trends**, SST variability modes, and 
            other atmospheric variability modes using xarray.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Key Features</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-200">Data Preprocessing</h3>
            <p className="text-gray-300">
              xIndices supports multiple data preprocessing tools, enabling users to load, regrid, and manipulate data efficiently.
              It incorporates methods from the <strong>Earth System Modeling Framework (ESMF)</strong>.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-200">Rotated EOF Analysis</h3>
            <p className="text-gray-300">
              xIndices allows users to perform **Empirical Orthogonal Function (EOF) analysis**, both **rotated (Varimax, Promax)** and unrotated.
              This enables researchers to analyze climate variability patterns more effectively.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-200">Variety of Climate Variability Modes</h3>
            <p className="text-gray-300">xIndices supports several key climate variability modes, including:</p>
            <ul className="list-disc list-inside text-gray-400 mt-3">
              <li><strong>SST Warming Mode</strong></li>
              <li><strong>ENSO</strong> (El Niño-Southern Oscillation)</li>
              <li><strong>PDO</strong> (Pacific Decadal Oscillation)</li>
              <li><strong>AMO</strong> (Atlantic Multidecadal Oscillation)</li>
              <li><strong>NAO</strong> (North Atlantic Oscillation)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-200">Parameter Controls for Variability Definitions</h3>
            <p className="text-gray-300">
              xIndices offers extensive **parameter controls**, allowing users to **customize variability definitions** 
              for more tailored climate analysis.
            </p>
          </div>
        </section>

        {/* Future Plans */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Future Plans</h2>
          <p className="text-gray-300">
            More variability modes will be added in future updates. Additionally, community contributions 
            are encouraged to enhance the development of xIndices.
          </p>
        </section>

        {/* Documentation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Documentation</h2>
          <p className="text-gray-300">
            Explore the full documentation at: 
            <a href="https://xindices.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">
              xIndices Documentation
            </a>
          </p>
        </section>

        {/* Installation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Installation</h2>
          <p className="text-gray-300">You can install xIndices using **conda** (recommended) or **pip**:</p>

          <div className="bg-gray-700 text-gray-300 p-4 rounded-md mt-3">
            <p className="text-sm font-mono"># Using Conda (Recommended):</p>
            <pre className="text-sm bg-gray-800 p-2 rounded-md">
              conda create -n x_indices -c conda forge python=3.11<br />
              conda activate x_indices<br />
              conda install -c jiveshdixit -c conda-forge xindices
            </pre>
          </div>

          <div className="bg-gray-700 text-gray-300 p-4 rounded-md mt-3">
            <p className="text-sm font-mono"># Using Pip:</p>
            <pre className="text-sm bg-gray-800 p-2 rounded-md">
              conda create -n x_indices -c conda forge python=3.11 xesmf  # (Mandatory)<br />
              conda activate x_indices<br />
              pip install xIndices
            </pre>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Requirements</h2>
          <p className="text-gray-300">
            xIndices requires **Python 3.10 - 3.12** and is designed to be platform-independent.
          </p>
        </section>

        {/* Community and Support */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Community and Support</h2>
          <p className="text-gray-300">
            Join the xIndices community for discussions, feature requests, and troubleshooting via **Slack**.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">Conclusion</h2>
          <p className="text-gray-300">
            Whether you're a climate scientist, data analyst, or student, **xIndices** simplifies climate variability 
            analysis and allows for deeper insights into climate patterns.
          </p>
          <p className="text-gray-300 mt-3">
            For more details, visit the GitHub repository or the Anaconda page for installation instructions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Blog3;
