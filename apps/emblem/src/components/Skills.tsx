import { skills } from '../data'

/** Inline signature squiggle (drawn path, no copied asset). */
function Signature() {
  return (
    <svg
      viewBox="0 0 200 60"
      aria-hidden="true"
      className="mt-6 h-12 w-44 text-ink/70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M8 38 C 30 12, 44 52, 62 30 S 88 14, 98 34 S 120 44, 132 26 S 156 12, 168 30 S 186 40, 194 24" />
    </svg>
  )
}

/** Emblem skills: light section with a signature block (heading, paragraph,
 *  signature, name + role) on the left and four labeled red progress bars on
 *  the right. */
export function Skills() {
  return (
    <section id="about" aria-label="Skills" className="bg-light py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="max-w-md text-3xl font-light leading-tight text-ink lg:text-4xl">
            Your digital partner starts here.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ink/80">
            We are a team of strategists, designers and engineers who believe great digital products
            come from clarity, craft and close collaboration with our clients.
          </p>
          <Signature />
          <p className="mt-4 text-sm font-bold text-ink">Mr. John Doe</p>
          <p className="text-sm text-ink/70">CEO &amp; Co-Founder</p>
        </div>
        <div>
          <h3 className="text-2xl font-light text-ink">Our expertise and skills</h3>
          <div className="mt-8 space-y-6">
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">{skill.label}</span>
                  <span className="text-ink/70">{skill.width}%</span>
                </div>
                <div
                  role="progressbar"
                  aria-label={`${skill.label} proficiency`}
                  aria-valuenow={skill.width}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="h-2 w-full bg-track"
                >
                  <div className="h-full bg-brand" style={{ width: `${skill.width}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
