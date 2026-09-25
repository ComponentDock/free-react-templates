const experiences = [
  {
    period: '2016-Present',
    company: 'Web Design Company',
    role: 'Web Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed tristique justo nec mauris efficitur, ut lacinia elit dapibus.',
  },
  {
    period: '2014-2016',
    company: 'Web Design Company',
    role: 'Web Designer',
    description:
      'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed tristique justo nec mauris efficitur, ut lacinia elit dapibus.',
  },
]

export function WorkExperience() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-dark mb-16 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-dark">
          Work Experience
        </h2>
        <ul className="space-y-12">
          {experiences.map((exp) => (
            <li key={exp.period} className="border-b border-border pb-8 last:border-b-0">
              <h3 className="text-2xl font-bold text-dark mb-1">{exp.period}</h3>
              <h4 className="text-lg font-semibold text-dark mb-2">{exp.company}</h4>
              <p className="text-sm font-semibold text-muted mb-3 uppercase tracking-wide">
                {exp.role}
              </p>
              <p className="text-muted leading-relaxed">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
