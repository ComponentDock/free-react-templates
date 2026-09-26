const skills = [
  { name: 'Photoshop', percent: 75, color: 'bg-skill-1' },
  { name: 'jQuery', percent: 60, color: 'bg-skill-2' },
  { name: 'HTML5', percent: 85, color: 'bg-skill-3' },
  { name: 'CSS3', percent: 90, color: 'bg-skill-4' },
  { name: 'WordPress', percent: 70, color: 'bg-skill-5' },
  { name: 'SEO', percent: 80, color: 'bg-skill-6' },
] as const

export function Skills() {
  return (
    <section id="skills" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-brand px-4 py-1 text-sm font-medium text-white">
            Skills
          </span>
          <h2 className="mt-4 text-3xl font-bold">My Skills</h2>
          <p className="mt-3 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm text-gray-500">{skill.percent}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                <div
                  className={`h-full rounded-full ${skill.color}`}
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
