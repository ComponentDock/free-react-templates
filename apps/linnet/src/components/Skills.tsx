const skills = [
  { name: 'Web Design', percent: 95 },
  { name: 'Coding', percent: 85 },
  { name: 'Developing', percent: 90 },
  { name: 'JavaScript', percent: 95 },
  { name: 'App Design', percent: 85 },
  { name: 'Graphics', percent: 90 },
]

export function Skills() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-4 font-heading text-3xl font-bold text-navy-500">
              Our Professional Skill
            </h2>
            <p className="mb-8 text-gray-500">
              We have honed our expertise across multiple disciplines to deliver comprehensive
              solutions for your business needs.
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {skills.map(({ name, percent }) => (
                <div key={name} className="text-center">
                  <div className="relative mx-auto mb-2 flex h-24 w-24 items-center justify-center">
                    <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#3498db"
                        strokeWidth="8"
                        strokeDasharray={`${(percent / 100) * 264} 264`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-lg font-bold text-navy-500">{percent}%</span>
                  </div>
                  <h4 className="text-sm font-semibold text-navy-500">{name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/linnet-skills/600/500"
              alt="Skills illustration"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
