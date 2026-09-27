interface TimelineItemProps {
  year: string
  title: string
  company: string
  description: string
}

function TimelineItem({ year, title, company, description }: TimelineItemProps) {
  return (
    <div className="relative border-l-2 border-brand pb-8 pl-8 last:pb-0">
      <div className="absolute left-[-9px] top-1 h-4 w-4 rounded-full border-2 border-brand bg-white" />
      <span className="mb-1 inline-block rounded bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
        {year}
      </span>
      <h4 className="mt-2 text-lg font-bold text-brand-dark">{title}</h4>
      <p className="mb-1 text-sm font-medium text-brand">{company}</p>
      <p className="text-sm leading-relaxed text-paragraph">{description}</p>
    </div>
  )
}

export function ExperiencePanel() {
  const experiences = [
    {
      year: '2021 – Present',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      description:
        'Leading the frontend team in building next-generation web applications using React and TypeScript.',
    },
    {
      year: '2019 – 2021',
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      description:
        'Developed responsive web applications and collaborated with designers to implement pixel-perfect UIs.',
    },
    {
      year: '2017 – 2019',
      title: 'Junior Developer',
      company: 'StartupLab',
      description: 'Built and maintained web interfaces for early-stage startup products.',
    },
  ]

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-brand-dark">Work Experience</h3>
      <div className="space-y-0">
        {experiences.map((exp) => (
          <TimelineItem key={exp.title} {...exp} />
        ))}
      </div>
    </div>
  )
}
