const skills = [
  { label: 'HTML', pct: 81 },
  { label: 'CSS', pct: 93 },
  { label: 'PSD', pct: 72 },
  { label: 'DESIGN', pct: 99 },
]

export function Expertise() {
  return (
    <section id="expertise" className="bg-white py-20">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-12 flex items-end gap-4">
          <span className="font-display text-6xl font-bold text-[#32DB8A] opacity-40">06</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
            Expertise
          </h2>
        </div>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-mist">
          Fusce suscipit, orci eget lobortis sodales, velit nunc tristique metus, in tristique odio
          ante id sem. Etiam in quam et sapien bibendum mollis. Morbi eget velit eros, quis
          imperdiet arcus.
        </p>

        <div className="space-y-6">
          {skills.map((s) => (
            <div key={s.label}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wide text-ink">
                  {s.label}
                </span>
                <span className="text-sm font-bold text-[#32DB8A]">{s.pct}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-[#32DB8A] transition-all"
                  style={{ width: `${s.pct}%` }}
                  role="progressbar"
                  aria-valuenow={s.pct}
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
