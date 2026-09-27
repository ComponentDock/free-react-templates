interface SkillBarProps {
  name: string
  percentage: number
  description: string
}

export function SkillBar({ name, percentage, description }: SkillBarProps) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-baseline justify-between">
        <h4 className="text-base font-bold text-brand-dark">{name}</h4>
        <span className="text-sm font-semibold text-brand">{percentage}%</span>
      </div>
      <div className="mb-2 h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-brand transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-paragraph">{description}</p>
    </div>
  )
}

export function SkillsPanel() {
  const skills = [
    {
      name: 'Intuition',
      percentage: 75,
      description: 'Strong analytical and problem-solving instincts',
    },
    {
      name: 'Creativity',
      percentage: 83,
      description: 'Innovative design thinking and visual composition',
    },
    { name: 'Pure Luck', percentage: 25, description: 'Favors the prepared mind' },
    { name: 'Awesomeness', percentage: 95, description: 'Relentless pursuit of excellence' },
  ]

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-brand-dark">Technical Skills</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  )
}
