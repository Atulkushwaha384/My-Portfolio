
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen  text-white py-10 archivo "
    >
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Title */}
        <div className="text-center">
          <p className="text-[#7a7878] mt-2 text-2xl">
            Technologies and tools I work with.
          </p>
        </div>

        {/* Skill Sections */}
        {skills.map((section, index) => (
          <div key={index} className="mb-14">

            {/* Category Heading */}
            <h2 className="text-2xl font-xl mb-6">
              {section.category}
            </h2>

            {/* Skill Cards */}
            <div
              className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
              gap-5
              "
            >
              {section.items.map((skill, i) => (
                <div
                  key={i}
                  className="
                  bg-[#1115]
                  border border-gray-800
                  rounded-2xl
                  p-6
                  flex flex-col
                  items-center
                  justify-center
                  gap-4
                  hover:border-cyan-400
                  hover:-translate-y-2
                  transition-all duration-300
                  cursor-pointer
                  "
                >
                  {/* Icon */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-14 h-14 object-contain"
                  />

                  {/* Skill Name */}
                  <h3 className="text-sm md:text-base font-medium">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;