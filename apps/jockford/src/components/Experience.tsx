import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'TechCorp',
    date: '2028 - 2030',
    description:
      'Led development of enterprise web applications using React, Node.js, and cloud infrastructure.',
    color: 'bg-brand',
  },
  {
    title: 'Front End Developer',
    company: 'Google Company',
    date: '2028 - 2030',
    description: 'Built responsive user interfaces for Google Maps and Google Workspace products.',
    color: 'bg-emerald-500',
  },
  {
    title: 'System Analyst',
    company: 'DataFlow Inc',
    date: '2028 - 2030',
    description: 'Analyzed and optimized system architectures for Fortune 500 clients.',
    color: 'bg-amber-500',
  },
  {
    title: 'Creative Designer',
    company: 'DesignHub',
    date: '2028 - 2030',
    description: 'Created brand identities and marketing materials for startup clients.',
    color: 'bg-rose-500',
  },
  {
    title: 'UI/UX Designer',
    company: 'Envato',
    date: '2028 - 2030',
    description:
      'Designed user interfaces for digital products sold on the Envato Market platform.',
    color: 'bg-brand',
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-bg-primary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-3xl font-bold text-text-primary">Work Experience</h2>
        <p className="mb-12 max-w-2xl text-text-secondary">
          A timeline of my professional journey and the roles that shaped my expertise.
        </p>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`relative mb-8 flex ${
                i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } items-center`}
            >
              {/* Content */}
              <div className={`w-[calc(50%-24px)] ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <h3 className="text-lg font-semibold text-text-primary">{exp.title}</h3>
                <p className="text-sm text-brand">{exp.company}</p>
                <p className="mb-1 text-xs text-text-muted">{exp.date}</p>
                <p className="text-sm text-text-secondary">{exp.description}</p>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${exp.color} text-white shadow-md`}
                >
                  <Briefcase className="h-4 w-4" />
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="w-[calc(50%-24px)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
