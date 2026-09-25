const skills = [
  { name: 'CSS', percent: 95, lastWeek: 93, lastMonth: 90 },
  { name: 'HTML', percent: 98, lastWeek: 96, lastMonth: 94 },
  { name: 'jQuery', percent: 68, lastWeek: 65, lastMonth: 60 },
  { name: 'Photoshop', percent: 92, lastWeek: 90, lastMonth: 87 },
  { name: 'WordPress', percent: 83, lastWeek: 80, lastMonth: 76 },
  { name: 'SEO', percent: 95, lastWeek: 93, lastMonth: 91 },
]

function CircularProgress({ percent, size = 120 }: { percent: number; size?: number }) {
  const radius = (size - 10) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <svg width={size} height={size} className="mx-auto" aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e9ecef" strokeWidth="8" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#007bff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="text-lg font-bold fill-ink">
        {percent}%
      </text>
    </svg>
  )
}

export function Skills() {
  return (
    <section id="skills" className="bg-light-bg py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">My Skills</h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="rounded-lg bg-white p-6 text-center shadow-md">
              <CircularProgress percent={skill.percent} />
              <h3 className="mt-4 text-lg font-semibold text-ink">{skill.name}</h3>
              <div className="mt-3 flex justify-between text-xs text-smoke">
                <span>Last week: {skill.lastWeek}%</span>
                <span>Last month: {skill.lastMonth}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
