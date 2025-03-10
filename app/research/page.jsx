"use client";
import { useState } from "react";
import Link from "next/link";

const presentations = [
  {
    title: "Mann-Kendall Trend Test",
    file: "https://docs.google.com/presentation/d/1a0D4Jd4lUyWtRNT5XzOon-ONDerce5Rti5dJRvJQAP0/present?slide=id.p",
  },
];

const Research = () => {
  const [showFullText, setShowFullText] = useState(false);

  const background = `Both Internal Climate Variability (ICV) and anthropogenically induced climate change combinedly drive the evolution of future global and regional climate. 

The recently released Sixth Assessment Report of the IPCC (AR6) summarizes the report for policymakers called Summary for Policy Makers (SPM). Some of the relevant points about the role of humans in the global warming trend quoted in SPM are as follows:

  "Human-induced climate change is already affecting many weather and climate extremes in every region across the globe. Evidence of observed changes in extremes such as heatwaves, heavy precipitation, droughts, and tropical cyclones, and, in particular, their attribution to human influence, has strengthened since AR5."

Variations in ICV in the near-term are large enough to amplify or attenuate the human-induced warming trend, as reported in SPM:

  "Internal variability has largely been responsible for the amplification and attenuation of the observed human-caused decadal to multi-decadal mean precipitation changes in many land regions. At global and regional scales, near-term changes in monsoons will be dominated by the effects of internal variability."

This makes ICV an important driver of trends in warming at multi-year to decadal timescales. The most important ICV factors affecting almost all regional climates across the globe are:
  - Pacific Decadal Oscillation (PDO) / Inter-decadal Pacific Oscillation (IPO) in the Pacific Ocean
  - Atlantic Multi-decadal Oscillation (AMO) in the Atlantic Ocean.

These variabilities are also believed to be modulators of Global Mean Surface Temperature (GMST) in the near-term, hence affecting many regional climate systems across the globe, as reported by many studies in recent years.

Skillful prediction of these ICV modes can help us predict the future evolution of climate at near-term scales. The Decadal Climate Prediction Project (DCPP) within Coupled Model Inter-comparison Project Phase 6 (CMIP6) aims to produce skillful real-time forecasts at multi-year scales. Experiments under DCPP are divided into three components with different deliverables. These components and their deliverables are as listed `;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 md:px-12 lg:px-16">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold text-green-400 text-center mb-8">
        Research
      </h1>

      {/* Background Section */}
      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg mb-8 transition-all duration-300">
        <h2 className="text-xl sm:text-2xl font-bold text-green-400 mb-4">Background</h2>
        <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
          {showFullText ? background : `${background.substring(0, 400)}...`}
          {showFullText && (
            <>
              {" "}
              <Link
                href="https://www.wcrp-climate.org/dcp-overview"
                target="_blank"
                className="text-green-400 hover:text-white underline transition-colors duration-200"
              >
                here
              </Link>
            </>
          )}
        </p>
        <button
          onClick={() => setShowFullText(!showFullText)}
          className="mt-4 text-green-400 hover:text-white underline text-sm font-medium transition-colors duration-200"
        >
          {showFullText ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Research Topics */}
      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-green-400 mb-4">Key Research Topics</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
          <li>Role of Internal Climate Variability (ICV) in near-term climate predictions.</li>
          <li>Influence of Pacific Decadal Oscillation (PDO) and Atlantic Multi-decadal Oscillation (AMO).</li>
          <li>Decadal Climate Prediction Project (DCPP) under CMIP6.</li>
          <li>Statistical methods for climate trend analysis.</li>
        </ul>
      </div>

      {/* Presentations */}
      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-green-400 mb-6">Presentations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Text Content */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Non-Parametric Statistical Test</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              <strong>Mann-Kendall Trend Test</strong> is used to test the significance of a{" "}
              <strong>monotonic trend</strong> in data. It is a <strong>non-parametric test</strong>, meaning it does not
              require the data to follow a specific distribution.
              <br />
              <br />
              One important assumption in this test is that the data should{" "}
              <strong>not be serially auto-correlated</strong>. This method is widely used in climate studies for
              detecting trends in temperature, precipitation, and other environmental data.
            </p>
          </div>

          {/* Right: Embedded PPT Viewer */}
          <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col">
            <iframe
              src="https://docs.google.com/presentation/d/1a0D4Jd4lUyWtRNT5XzOon-ONDerce5Rti5dJRvJQAP0/embed?start=false&loop=false&delayms=3000"
              width="100%"
              height="300"
              className="rounded-lg border border-gray-700 mb-4"
              title="Mann-Kendall Trend Test Presentation"
            ></iframe>
            <div className="flex flex-wrap gap-2">
              {presentations.map((ppt, index) => (
                <Link
                  key={index}
                  href={ppt.file}
                  target="_blank"
                  className="text-green-400 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  <strong>View {ppt.title}</strong> 🔗
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;