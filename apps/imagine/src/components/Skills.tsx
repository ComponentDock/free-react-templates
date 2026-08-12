interface Skill {
  name: string
  percent: number
}

const SKILLS: Skill[] = [
  { name: 'Wireframing', percent: 83 },
  { name: 'User Research', percent: 90 },
  { name: 'User Experience', percent: 75 },
]

/* Skills section recreated from the source's black split section: a white
   heading and paragraph on the left, three gradient progress rings on the
   right (CSS conic-gradient with the brand gradient). */

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="bg-black py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold text-white lg:text-4xl">
            Our Fields of Expertness
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-4">
              <div
                className="flex h-32 w-32 items-center justify-center rounded-full"
                style={{
                  background: `conic-gradient(var(--color-brand-start) 0deg ${skill.percent * 3.6}deg, rgba(255,255,255,0.12) ${skill.percent * 3.6}deg 360deg)`,
                }}
              >
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-black">
                  <span className="text-xl font-semibold text-white">{skill.percent}%</span>
                </div>
              </div>
              <h3 className="text-base font-medium text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
