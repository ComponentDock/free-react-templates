const EDUCATION = [
  {
    degree: 'Master of Computer Science',
    school: 'Stanford University',
    period: '2018 – 2020',
    description: 'Specialized in Human-Computer Interaction and User Experience Design.',
  },
  {
    degree: 'Bachelor of Design',
    school: 'Rhode Island School of Design',
    period: '2014 – 2018',
    description: 'Focus on visual communication and interactive media design.',
  },
]

const EXPERIENCE = [
  {
    role: 'Lead Product Designer',
    company: 'TechCorp',
    period: '2022 – Present',
    description:
      'Leading the design team in creating innovative digital products used by millions.',
  },
  {
    role: 'Senior UI/UX Designer',
    company: 'DesignStudio',
    period: '2020 – 2022',
    description: 'Designed and shipped multiple successful web and mobile applications.',
  },
]

export function Resume() {
  return (
    <section id="resume" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">My Resume</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-8 text-xl font-semibold text-gray-900">Education</h3>
            <div className="space-y-8 border-l-2 border-leaf-400 pl-6">
              {EDUCATION.map((e) => (
                <div key={e.degree} className="relative">
                  <div className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full border-2 border-leaf-400 bg-white" />
                  <p className="mb-1 text-sm text-leaf-400">{e.period}</p>
                  <h4 className="font-semibold text-gray-900">{e.degree}</h4>
                  <p className="mb-1 text-gray-600">{e.school}</p>
                  <p className="text-sm text-gray-500">{e.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="mb-8 text-xl font-semibold text-gray-900">Experience</h3>
            <div className="space-y-8 border-l-2 border-leaf-400 pl-6">
              {EXPERIENCE.map((e) => (
                <div key={e.role} className="relative">
                  <div className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full border-2 border-leaf-400 bg-white" />
                  <p className="mb-1 text-sm text-leaf-400">{e.period}</p>
                  <h4 className="font-semibold text-gray-900">{e.role}</h4>
                  <p className="mb-1 text-gray-600">{e.company}</p>
                  <p className="text-sm text-gray-500">{e.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
