const education = [
  {
    year: '2008',
    diploma: 'UI/UX Diploma',
    school: 'Design College California',
    description:
      'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed tristique justo nec mauris efficitur, ut lacinia elit dapibus.',
  },
  {
    year: '2006',
    diploma: 'Web Design Diploma',
    school: 'Design College California',
    description:
      'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed tristique justo nec mauris efficitur, ut lacinia elit dapibus.',
  },
]

export function Education() {
  return (
    <section className="py-24 bg-light">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-dark mb-16 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-dark">
          Education
        </h2>
        <ul className="space-y-12">
          {education.map((edu) => (
            <li key={edu.year} className="border-b border-border pb-8 last:border-b-0">
              <h3 className="text-2xl font-bold text-dark mb-1">{edu.year}</h3>
              <h4 className="text-lg font-semibold text-dark mb-2">{edu.diploma}</h4>
              <p className="text-sm font-semibold text-muted mb-3 uppercase tracking-wide">
                {edu.school}
              </p>
              <p className="text-muted leading-relaxed">{edu.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
