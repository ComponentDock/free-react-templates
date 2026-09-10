interface SkillBarProps {
  label: string
  percent: number
}

function SkillBar({ label, percent }: SkillBarProps) {
  return (
    <div className="mb-5">
      <div className="mb-1 flex justify-between text-sm font-bold uppercase text-heading">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded bg-gray-200">
        <div
          className="h-full rounded bg-primary-500 transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const skills: SkillBarProps[] = [
    { label: 'Web Development', percent: 89 },
    { label: 'Online Marketing', percent: 58 },
    { label: 'Digital Media', percent: 49 },
    { label: 'Photography', percent: 76 },
    { label: 'Creative Design', percent: 64 },
  ]

  return (
    <section id="skill-section" className="py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded md:h-auto">
          <img
            src="https://picsum.photos/seed/bizplanner-skills/600/400"
            alt="Skills showcase"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          {skills.map((skill) => (
            <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
          ))}
        </div>
      </div>
    </section>
  )
}
