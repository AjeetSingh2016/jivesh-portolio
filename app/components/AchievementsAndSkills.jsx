'use-client'
export default function AchievementsAndSkills() {
  const achievements = [
    {
      category: "Examinations & Competitions",
      items: [
        "Secured All India Rank 1 in GATE-2011.",
        "Won Third prize at national level in SAE BAJA event of design of Virtual All Terrain Vehicle.",
      ],
    },
    {
      category: "Fellowships & Grants",
      items: [
        "Awarded Prime Minister's Research Fellowship (PMRF) in Dec-2020 cycle.",
        "Awarded Early Career Scientist Travel Support (ECSTS) by European Geophysical Union to present my work in EGU General Assembly 2024 in Vienna, Austria.",
      ],
    },
  ];

  const keySkills = [
    {
      category: "Programming Packages",
      skills: ["Python", "MATLAB", "FORTRAN", "Bash scripting"],
    },
    {
      category: "Climate Models",
      skills: ["CESM1.2.2", "CESM2", "WRF-ARW"],
    },
    {
      category: "CMIP6 Data",
      skills: [
        "Historical experiments",
        "Shared Socio‐Economic Pathways (SSP126, SSP245, SSP370, SSP585)",
        "Decadal Climate Prediction Project (DCPP) experiments",
      ],
    },
    {
      category: "Data Analysis Packages (Python)",
      skills: [
        "CDAT",
        "Xarray",
        "Pandas",
        "xCDAT",
        "ncl",
        "numpy",
        "scipy",
        "scikit-learn",
        "tensorflow",
        "multiprocessing",
      ],
    },
    {
      category: "Post Processing Tools",
      skills: ["Matplotlib", "Seaborn", "VCS", "Tecplot"],
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Awards & Achievements Card */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-green-400 mb-4">🏆 Awards & Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white">{achievement.category}:</h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-2">
                  {achievement.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Skills Card */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-green-400 mb-4">💡 Key Skills</h2>
          <div className="space-y-4">
            {keySkills.map((skill, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white">{skill.category}:</h3>
                <p className="text-gray-300">{skill.skills.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
