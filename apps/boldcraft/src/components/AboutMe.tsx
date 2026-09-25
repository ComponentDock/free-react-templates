const skills = [
  { label: 'UI Design', pct: 60 },
  { label: 'UX', pct: 89 },
  { label: 'Illustration', pct: 95 },
]

function SkillBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div className="mb-5">
      <div className="mb-1 flex items-center justify-between text-sm font-medium text-text-primary">
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-[var(--radius-progress)] bg-brand-light">
        <div
          className="h-full rounded-[var(--radius-progress)] bg-brand transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function AboutMe() {
  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-heading text-3xl font-bold text-text-primary">About Me</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-secondary">
            I&apos;m a passionate digital product designer with over 10 years of experience creating
            user-centered designs for web and mobile platforms. My approach combines strategic
            thinking with creative execution.
          </p>
          <p className="mb-6 text-sm leading-relaxed text-text-secondary">
            Currently leading the design team at Creative Studio, where we&apos;ve helped dozens of
            startups and enterprises build products that people love. I believe great design is
            invisible — it just works.
          </p>
          <blockquote className="border-l-4 border-brand pl-6 text-lg italic text-brand">
            &ldquo;Design is not just what it looks like. Design is how it works.&rdquo;
          </blockquote>
        </div>
        <div>
          <h3 className="mb-6 font-heading text-xl font-bold text-text-primary">My Skills</h3>
          {skills.map((s) => (
            <SkillBar key={s.label} label={s.label} pct={s.pct} />
          ))}
        </div>
      </div>
    </section>
  )
}
