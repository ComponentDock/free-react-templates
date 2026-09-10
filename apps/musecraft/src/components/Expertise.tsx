const skills = [
  { label: 'HTML', percent: 81, color: 'bg-mint' },
  { label: 'CSS', percent: 93, color: 'bg-amber' },
  { label: 'PSD', percent: 72, color: 'bg-rose' },
  { label: 'Design', percent: 99, color: 'bg-mint' },
]

export function Expertise() {
  return (
    <section id="skills" className="relative bg-navy py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 flex items-start justify-end gap-6">
          <h2 className="font-heading text-4xl font-bold text-white">Expertise</h2>
          <span className="font-heading text-8xl font-bold text-white/10">06</span>
        </div>
        <p className="mb-4 text-center font-heading text-sm font-bold uppercase tracking-wider text-white/60">
          Skills
        </p>
        <p className="mx-auto mb-12 max-w-xl text-center text-sm leading-relaxed text-white/50">
          Fusce suscipit, orci eget lobortis sodales, velit nunc tristique metus, in tristique odio
          ante id sem. Etiam in quam et arcu feugiat semper.
        </p>
        <div className="mx-auto max-w-2xl space-y-6">
          {skills.map(({ label, percent, color }) => (
            <div key={label} className="group">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  {label}
                </span>
                <span className="text-xs font-bold text-white/60">{percent}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full ${color} transition-all duration-700`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
