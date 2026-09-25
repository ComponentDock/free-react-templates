const skills = [
  { label: 'HTML5 & CSS3', percentage: 97 },
  { label: 'Web Design', percentage: 78 },
  { label: 'Java', percentage: 67 },
  { label: 'PHP', percentage: 97 },
]

function RadialProgress({ label, percentage }: { label: string; percentage: number }) {
  const circumference = 2 * Math.PI * 42
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <svg className="h-28 w-28" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" fill="none" stroke="#eee" strokeWidth="6" />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#FFA804"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-heading text-sm font-bold"
        >
          {percentage}%
        </text>
      </svg>
      <span className="mt-2 text-sm font-medium text-heading">{label}</span>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            PROFESSIONAL PATH
          </p>
          <h2 className="mb-4 text-3xl font-bold text-heading">About me</h2>
          <div className="mx-auto h-[10px] w-[50px] rounded-[5px] bg-brand" />
        </div>

        <p className="mx-auto mb-12 max-w-2xl text-center text-paragraph">
          A passionate and dedicated professional with extensive experience in web development and
          design. Skilled in building responsive, user-friendly interfaces and delivering
          high-quality solutions that meet client needs.
        </p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {skills.map((skill) => (
            <RadialProgress key={skill.label} label={skill.label} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  )
}
