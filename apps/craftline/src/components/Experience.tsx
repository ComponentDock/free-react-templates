import { PenTool } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Developer',
    period: '2028-2030',
    description:
      'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.',
    color: 'bg-brand',
  },
  {
    title: 'Front End Developer at Google Company',
    period: '2028-2030',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    color: 'bg-emerald-500',
  },
  {
    title: 'System Analyst',
    period: '2028-2030',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    color: 'bg-violet-500',
  },
  {
    title: 'Creative Designer',
    period: '2028-2030',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    color: 'bg-amber-500',
  },
  {
    title: 'UI/UX Designer at Envato',
    period: '2028-2030',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    color: 'bg-rose-500',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-medium text-brand uppercase tracking-wider">Experience</span>
        <h2 className="text-3xl font-bold text-text-primary mt-2 mb-10">Work Experience</h2>

        <div className="relative border-l-2 border-border ml-4">
          {experiences.map((exp) => (
            <div key={exp.title} className="relative pl-8 pb-10 last:pb-0">
              <div
                className={`absolute -left-[9px] top-1 w-4 h-4 ${exp.color} rounded-full border-2 border-bg-primary`}
              />
              <div className="bg-bg-secondary border border-border rounded-lg p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-text-primary">{exp.title}</h3>
                  <span className="text-sm text-text-muted">{exp.period}</span>
                </div>
                <p className="text-sm text-text-secondary">{exp.description}</p>
                <PenTool className="w-4 h-4 text-text-muted mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
