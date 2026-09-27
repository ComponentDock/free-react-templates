import { GraduationCap } from 'lucide-react'

interface EducationItemProps {
  year: string
  degree: string
  school: string
  description: string
}

function EducationItem({ year, degree, school, description }: EducationItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
        <GraduationCap className="h-5 w-5" />
      </div>
      <div>
        <span className="mb-1 inline-block rounded bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          {year}
        </span>
        <h4 className="mt-1 text-lg font-bold text-brand-dark">{degree}</h4>
        <p className="mb-1 text-sm font-medium text-brand">{school}</p>
        <p className="text-sm text-paragraph">{description}</p>
      </div>
    </div>
  )
}

export function EducationPanel() {
  const education = [
    {
      year: '2013 – 2017',
      degree: 'B.Sc. Computer Science',
      school: 'University of London',
      description: 'Focused on software engineering, algorithms, and human-computer interaction.',
    },
    {
      year: '2017 – 2019',
      degree: 'M.Sc. Web Technologies',
      school: 'Imperial College London',
      description:
        'Specialized in modern frontend frameworks, accessibility, and performance optimization.',
    },
  ]

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-brand-dark">Education</h3>
      <div className="space-y-6">
        {education.map((edu) => (
          <EducationItem key={edu.degree} {...edu} />
        ))}
      </div>
    </div>
  )
}
