"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title:
      "Operationalizing the Madden Julian Oscillation (MJO) forecast at NCMRWF",
    duration: "Sep 2024 - Oct 2024",
    association:
      "National Centre For Medium Range Weather Forecasting (Ncmrwf)",
    details: `MJO is a very important phenomenon of rainfall variability in tropics at S2S scales. Prediction of phase of MJO, i.e. zonal location of the wave or pulse of cloud and rainfall that moves eastward near the equator, is very important for short to medium range rainfall prediction. I operationalized the MJO prediction at S2S timescales using the output of the Coupled NCMRWF Unified model (CNCUM) forecast. Our S2S forecast including MJO forecast is shared across various Met agencies.`,
    image: "",
    links: [
      {
        text: "View Forecast",
        url: "https://www.ncmrwf.gov.in/product-main-mjo-erf",
      },
      {
        text: "GitHub Repo",
        url: "https://github.com/JiveshDixit/Compute-MJO",
      },
    ],
  },
  {
    title:
      "Creating a Simple Catastrophe model using OpenStreetMap & ERA5 Cyclone Data",
    duration: "Sep 2024 - Present",
    association: "Indian Institute of Technology, Delhi",
    details: `In this project I have created a catastrophe model using commercial and residential building data from OpenStreetMap. The data for asset value of the building is not available with me, so I have just assumed some numeric values in USD for asset in this model. I have chosen Hurricane Harvey as the hazard for this model. To calculate hazardous meteorological conditions from this cyclone I have use winds, wind gust and mslp data from ERA5. This model very closely calculated the landfall date and time along with the amplitude of meteorological variables as confirmed with https://earth.nullschool.net/ . I have chosen Harvey as it is considered wettest hurricane with losses totalling to $158.8 billion (https://www.nesdis.noaa.gov/news/hurricane-harvey-look-back-seven-years-later).`,
    image: "",
    links: [
      {
        text: "Read More",
        url: "https://www.jiveshdixit.info/blogs/simple-catastrophe-model-risk-assessment-from-a-from-cyclone-case",
      },
    ],
  },
  {
    title:
      "Prediction of Pacific Decadal Oscillation (PDO) index using Machine Learning",
    duration: "Sep 2024 - Present",
    association: "Indian Institute of Technology, Delhi",
    details: `PDO is a very non-linear phenomenon consisting of multiple timescales. Hosted in Pacific Ocean, PDO perturbs climate across the globe at multi-year to decadal timescales through tele-connections. Prediction of PDO index at multi-year timescales is quite desirable by many industries such as Energy sector, Infrastructure sector, Insurance and re-insurance sector, Agriculture sector and many more.

I used machine learning algorithm to predict PDO index using predictors such as Sea-Surface Salinity, Sea-Surface Temperature, Mean Sea-level Pressure and Geopotential height. I used Fourier-CNN-GRU based model in this project.

On the validation data, it gives a very good skill to predict the PDO index by capturing variability in PDO index with around 98% accuracy.`,
    image: "/project3.png", // Empty image property to test conditional rendering
    links: [],
  },
  {
    title: "xIndices: A Python Package for Climate Variability Indices",
    duration: "Ongoing",
    association: "Indian Institute of Technology, Delhi",
    details: `In this project I have created a Python based API to help the scientific community interested in Climate variability indices and patterns such as The El Niño-Southern Oscillation (ENSO), Pacific Decadal Oscillation (PDO), North Atlantic Oscillation (NAO), Atlantic Multi-decadal Oscillation (AMO) and other variability modes in user defined regions along with variance fraction explained by these variability modes.

Capability of this API is not limited to computation of variability modes. It also allows use to preprocess the data for computation such as reordering longitude from -180_180 to 0_360, renaming the names of dimensions for smooth uses across the functions, regridding of curvilinear or rectilinear grid to rectilinear grid of resolution defined by the user.

It also has post-processing capabilities such as visualizing the indices and patterns without much effort. I am committed to add more variability modes and other capabilities to the software.`,
    image: "",
    links: [
      {
        text: "Documentation",
        url: "https://xindices.readthedocs.io/en/latest/",
      },
      {
        text: "Blog Post",
        url: "https://www.jiveshdixit.info/blogs/xindices-a-xarray-based-python-package-for-climate-variability-modes",
      },
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col md:flex-row gap-8">
      {/* Left Section - Project Details */}
      <div className="flex-1 bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
          {selectedProject.title}
        </h2>
        <p className="text-sm text-gray-400 mb-2">{selectedProject.duration}</p>
        <p className="text-sm text-gray-300 italic mb-4">
          {selectedProject.association}
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed text-base">
          {selectedProject.details}
        </p>
        {/* Conditional rendering for image */}
        {selectedProject.image.length !=0 && (
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-auto rounded-lg mt-4 shadow-md object-contain max-h-96"
          />
        )}
        <div className="flex flex-wrap gap-3 mt-6">
          {selectedProject.links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              className="text-green-400 hover:text-white border border-green-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section - Project List */}
      <div className="md:w-1/3 bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-green-400 mb-6">Project List</h2>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li
              key={index}
              className={`cursor-pointer p-4 rounded-lg transition-all duration-200 ${
                selectedProject.title === project.title
                  ? "bg-green-500 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
              onClick={() => setSelectedProject(project)}
              tabIndex={0} // Accessibility: keyboard navigation
              onKeyPress={(e) =>
                e.key === "Enter" && setSelectedProject(project)
              } // Accessibility: keyboard support
            >
              <h3 className="text-base font-semibold leading-tight">
                {index + 1}. {project.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {project.association}
              </p>
              <p className="text-xs text-gray-500 mt-1">{project.duration}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;