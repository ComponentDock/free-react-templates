import { SkillBar } from './SkillBar'

const skills = [
  { label: 'Wireframing', percentage: 90 },
  { label: 'UI/UX', percentage: 70 },
  { label: 'Interaction design', percentage: 45 },
] as const

export function AboutSkills() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-3xl font-bold leading-tight text-ink sm:text-4xl">
          I'm a Creative director based on New York, who loves clean, simple &amp; unique design
        </h2>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1">
            <p className="mb-4 leading-relaxed text-muted">
              I am a passionate creative director with over a decade of experience crafting
              compelling visual narratives. My approach blends strategic thinking with artistic
              intuition to deliver designs that resonate and inspire.
            </p>
            <p className="mb-8 leading-relaxed text-muted">
              From brand identity to digital experiences, I bring ideas to life through thoughtful
              design solutions that connect with audiences and drive results. Every project is an
              opportunity to push boundaries and create something extraordinary.
            </p>
            <a
              href="#"
              className="inline-block rounded-none border border-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Download CV
            </a>
          </div>

          <div className="flex-1">
            {skills.map((skill) => (
              <SkillBar key={skill.label} label={skill.label} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
