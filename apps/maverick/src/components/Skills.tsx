import { SKILLS } from '../data'

/* Skills section recreated from the ColorLib "Clark" skills: six progress
   bars on a 10px #1a1a1a track with an amber fill, each labelled with the
   skill name (20px, weight 500) and its percentage. */

export function Skills() {
  return (
    <section id="skills-section" className="bg-black py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[13px] font-medium uppercase tracking-[3px] text-brand">
            My Skills
          </p>
          <h2 className="text-[50px] font-bold text-white">My Skills</h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {SKILLS.map((skill) => (
            <div key={skill.label}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-[20px] font-medium text-white">{skill.label}</h3>
                <span className="text-[20px] font-medium text-white">{skill.percent}%</span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={skill.percent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.label} ${skill.percent} percent`}
                className="h-[10px] w-full rounded-none bg-track"
              >
                <div className="h-full bg-brand" style={{ width: `${skill.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
