import { ArrowRight } from 'lucide-react'

const skills = [
  { name: 'Adobe Photoshop CC', percent: 70 },
  { name: 'Adobe Illustrator CC', percent: 60 },
  { name: 'Adobe InDesign CC', percent: 50 },
  { name: 'Adobe After Effects CC', percent: 40 },
] as const

export function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">Our Tools Expertness</h2>
          <p className="mt-4 text-sm leading-relaxed text-smoke">
            Few would argue that, despite the advancements of feminism over the past three decades,
            women still face a double standard when it comes to their behavior. While men's
            borderline-inappropriate behavior is often laughed off as "boys will be boys," women
            face higher conduct standards.
          </p>
          <a
            href="#testimonials"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-400 px-8 py-3 text-sm font-medium uppercase text-ink transition-colors hover:bg-primary-400 hover:text-white"
          >
            View More
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div>
          {skills.map((skill) => (
            <div key={skill.name} className="mb-5">
              <p className="mb-2 text-sm font-medium text-ink">{skill.name}</p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-mist">
                <div
                  className="h-full rounded-full bg-primary-400 transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                  role="progressbar"
                  aria-valuenow={skill.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
