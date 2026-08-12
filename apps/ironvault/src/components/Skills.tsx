import { SKILLS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Skills — centered title plus a light #f9f9ff panel of five labeled
 * progress bars (label + percentage, brand fill width) beside a trainer
 * photo.
 */
export function Skills() {
  return (
    <section id="skills" className="pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Some Latest Gym With me" center />
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <div className="bg-panel px-8 pb-8 pt-4">
            <ul className="space-y-6">
              {SKILLS.map((skill) => (
                <li key={skill.label}>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-medium text-ink">{skill.label}</p>
                    <span className="text-sm font-medium text-brand">{skill.value}%</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={skill.label}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.value}
                    className="mt-2 h-1.5 w-full bg-white"
                  >
                    <div className="h-full bg-brand" style={{ width: `${skill.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/ironvault-skills/560/640"
              alt="Ironvault trainer photo"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
