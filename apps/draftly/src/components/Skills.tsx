const SKILLS = [
  { name: 'CSS', percent: 95 },
  { name: 'HTML', percent: 98 },
  { name: 'jQuery', percent: 68 },
  { name: 'Photoshop', percent: 85 },
  { name: 'WordPress', percent: 90 },
  { name: 'SEO', percent: 75 },
]

function SkillCard({ name, percent }: { name: string; percent: number }) {
  const circumference = 2 * Math.PI * 45
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-center text-sm font-bold text-gray-900">{name}</h3>
      <div className="relative mx-auto h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#007bff"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-900">
            {percent}
            <span className="text-xs">%</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-light uppercase tracking-widest text-brand-500">
            Skills
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">My Skills</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
