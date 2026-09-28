const SKILLS = [
  { label: 'Photos Taken', percent: 75, description: 'Etiam nec odio vestibulum est.' },
  { label: 'Digital Design', percent: 83, description: 'Odio vestibulum est mattis.' },
  { label: 'HTML Coding', percent: 25, description: 'Vestibulum est mattis effic.' },
  { label: 'Illustrations', percent: 95, description: 'Vestibulum est mattis effic.' },
]

function ProgressCircle({ percent }: { percent: number }) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
      <circle cx="60" cy="60" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="6" />
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="#ffb016"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 60 60)"
      />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-lg font-bold fill-dark-heading"
      >
        {percent}%
      </text>
    </svg>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill) => (
            <div key={skill.label} className="text-center">
              <ProgressCircle percent={skill.percent} />
              <h6 className="mt-4 text-sm font-semibold text-dark-heading uppercase">
                {skill.label}
              </h6>
              <p className="text-xs text-gray-text mt-1">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
