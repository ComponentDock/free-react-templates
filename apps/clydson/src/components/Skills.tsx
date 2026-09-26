const skills = [
  { name: 'CSS', percent: 95, week: 28, month: 60 },
  { name: 'HTML', percent: 98, week: 28, month: 60 },
  { name: 'jQuery', percent: 68, week: 28, month: 60 },
  { name: 'Photoshop', percent: 92, week: 28, month: 60 },
  { name: 'WordPress', percent: 83, week: 28, month: 60 },
  { name: 'SEO', percent: 95, week: 28, month: 60 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand text-sm uppercase tracking-widest font-medium">Skills</span>
          <h2 className="text-3xl font-bold text-heading mt-2 mb-4">My Skills</h2>
          <p className="text-body max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="text-lg font-bold text-heading mb-4">{skill.name}</h3>
              <div className="relative w-28 h-28 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#007bff"
                    strokeWidth="8"
                    strokeDasharray={`${(skill.percent / 100) * 283} 283`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-heading">{skill.percent}%</span>
                </div>
              </div>
              <div className="flex justify-center gap-8 text-sm">
                <div>
                  <div className="font-bold text-heading">{skill.week}%</div>
                  <div className="text-gray-400">Last week</div>
                </div>
                <div>
                  <div className="font-bold text-heading">{skill.month}%</div>
                  <div className="text-gray-400">Last month</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
