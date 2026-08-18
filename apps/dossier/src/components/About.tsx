import { aboutBackground, aboutBio, aboutParagraph, skills } from '../data'
import { btnSolid } from './buttonClasses'

/**
 * About section: a floating white card over a desk-photo background with the
 * ABOUT MYSELF label, serif bio, solid-green Download Resume button, and
 * four green progress bars.
 */
export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="bg-cover bg-center py-32"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="bg-white p-10 shadow-xl lg:p-[100px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
            About Myself
          </p>
          <h2 className="mb-8 max-w-2xl font-heading text-[40px] font-normal leading-[1.3] text-ink">
            {aboutBio}
          </h2>
          <a href="#contact" className={`mb-10 inline-flex ${btnSolid}`}>
            Download Resume
          </a>

          <div className="mb-8 grid gap-x-14 gap-y-8 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.label} className="single-skill">
                <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-ink">{skill.label}</span>
                  <span className="text-ink/60">{skill.value}%</span>
                </div>
                <div
                  role="progressbar"
                  aria-label={skill.label}
                  aria-valuenow={skill.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="h-2 w-full bg-divider"
                >
                  <div className="h-full bg-brand-green" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <p className="max-w-2xl text-sm leading-relaxed text-muted">{aboutParagraph}</p>
        </div>
      </div>
    </section>
  )
}
