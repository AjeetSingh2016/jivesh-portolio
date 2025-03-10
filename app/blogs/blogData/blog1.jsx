import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const Blog1 = ({ link = "google.com" }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-10 ">
        
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold text-white mb-6 just flex">
          Understanding Variant Label in CMIP5 & CMIP6
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-white ml-5 flex justify-center items-center">
            <SquareArrowOutUpRight />
            </a>
        </h1>

        <p className="mb-4">
          <strong>Ensembles (Variant label)</strong> in CMIP5 (CMIP6) have been
          assigned to help identify the different simulations within a set of
          experiments. To locate specific experiments out of the various
          CMIP5/CMIP6 simulations, <strong>global attributes</strong> have been
          defined. These are:
        </p>

        {/* Experiment ID */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-300">
            📌 Experiment ID
          </h2>
          <p className="ml-4">
            <strong>Experiment ID</strong> is used to identify the{" "}
            <strong>root experiment</strong> for the simulation.
            <br />
            <strong>Examples:</strong> <code>historical</code>,{" "}
            <code>ssp126</code>, <code>ssp245</code>, <code>ssp370</code>,{" "}
            <code>dcppA-hindcast</code>, <code>dcppB-forecast</code>, etc.
          </p>
        </div>

        {/* Sub-experiment ID */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-300">
            📌 Sub-experiment ID
          </h2>
          <p className="ml-4">
            Defines sub-experiments for a given ensemble, otherwise{" "}
            <code>"None"</code>.
            <br />
            <strong>CMIP5:</strong> Not defined.
            <strong>CMIP6:</strong> Mainly used for{" "}
            <strong>DCPP experiments</strong>.
            <br />
            <strong>Example:</strong> In <code>dcppA-hindcast</code>{" "}
            experiments, <code>s1961</code> indicates the year in which the
            experiment is initialized.
          </p>
        </div>

        {/* Variant Label */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-300">
            📌 Variant Label
          </h2>
          <p className="ml-4">
            For an experiment, the <strong>Realization Index</strong>,{" "}
            <strong>Initialization Index</strong>,<strong>Physics Index</strong>
            , and <strong>Forcing Index</strong> are used to uniquely identify
            simulations of an <strong>ensemble</strong> within a model.
          </p>

          {/* Realization Index */}
          <div className="ml-6 mb-4">
            <h3 className="text-lg font-semibold text-yellow-300">
              🔹 Realization Index (k)
            </h3>
            <p className="ml-4">
              <strong>(≥1)</strong> Index distinguishing among members of an
              ensemble of simulations that differ only in their{" "}
              <strong>initialization point</strong>.
              <br />
              <strong>Example:</strong> Simulations with{" "}
              <code>"Natural forcing alone"</code> and{" "}
              <code>"Anthropogenic + Natural forcing"</code> starting at the
              same time will have the same realization number.
              <br />
              However, across different models, the same realization number does{" "}
              <strong>not</strong> ensure the experiments were initialized at
              the same point.
            </p>
          </div>

          {/* Initialization Index */}
          <div className="ml-6 mb-4">
            <h3 className="text-lg font-semibold text-yellow-300">
              🔹 Initialization Index (l)
            </h3>
            <p className="ml-4">
              <strong>(≥1)</strong> Distinguishes between different{" "}
              <strong>initialization algorithms</strong> used to impose initial
              conditions on a forecast. If only one method is used, it is
              assigned <code>1</code>.
            </p>
          </div>

          {/* Physics Index */}
          <div className="ml-6 mb-4">
            <h3 className="text-lg font-semibold text-yellow-300">
              🔹 Physics Index (m)
            </h3>
            <p className="ml-4">
              <strong>(≥1)</strong> Represents different{" "}
              <strong>physics versions</strong> of a model.
              <br />
              <strong>Note:</strong> If a model has significant physics
              differences, it should be assigned a{" "}
              <strong>different source ID</strong>, not just a different Physics
              Index.
            </p>
          </div>

          {/* Forcing Index */}
          <div className="ml-6 mb-4">
            <h3 className="text-lg font-semibold text-yellow-300">
              🔹 Forcing Index (n)
            </h3>
            <p className="ml-4">
              <strong>(≥1)</strong> Differentiates runs that follow standard
              protocols for a single CMIP6 experiment but use different{" "}
              <strong>forcing datasets</strong>.
              <br />
              <strong>Example:</strong> Two historical simulations, one with
              CMIP6 recommended forcing datasets and another with a different
              dataset, should have distinct Forcing Index values.
            </p>
          </div>
        </div>

        {/* Variant Label Representation */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-300">
            📌 Variant Label Format
          </h2>
          <p className="ml-4">
            <strong>Format:</strong> <code>{"r{k}i{l}p{m}f{n}"}</code>
            <br />
            <strong>Example:</strong> <code>{"r2i1p3f233"}</code> (where{" "}
            <strong>k = 2, l = 1, m = 3, n = 233</strong>).
          </p>
        </div>

        {/* CMIP5 vs CMIP6 Difference */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-green-300">
            📌 CMIP5 vs CMIP6
          </h2>
          <p className="ml-4">
            <strong>Format:</strong> <code>{"r{k}i{l}p{m}f{n}"}</code> <br />
            <strong>Example:</strong> <code>{"r2i1p3f233"}</code> (where{" "}
            <strong>k = 2, l = 1, m = 3, n = 233</strong>).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
