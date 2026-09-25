const SKILLS = [
  { name: 'Design', percentage: 85 },
  { name: 'HTML5', percentage: 98 },
  { name: 'CSS3', percentage: 97 },
  { name: 'WordPress', percentage: 88 },
  { name: 'Bootstrap', percentage: 92 },
]

export function Skills() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 md:grid-cols-5">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
          </div>
          <div className="space-y-6 md:col-span-4">
            {SKILLS.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.percentage}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded bg-gray-200">
                  <div
                    className="h-full rounded bg-leaf-400 transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} proficiency: ${skill.percentage}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
