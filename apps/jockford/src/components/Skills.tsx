import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'Photoshop', percentage: 90, color: 'bg-brand' },
  { name: 'JavaScript', percentage: 85, color: 'bg-emerald-500' },
  { name: 'HTML5', percentage: 95, color: 'bg-amber-500' },
  { name: 'CSS3', percentage: 88, color: 'bg-rose-500' },
  { name: 'WordPress', percentage: 75, color: 'bg-brand' },
  { name: 'SEO', percentage: 70, color: 'bg-emerald-500' },
]

function SkillBar({
  name,
  percentage,
  color,
}: {
  name: string
  percentage: number
  color: string
}) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setWidth(percentage)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    // ref.current is always set after render (useEffect runs post-paint)
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [percentage])

  return (
    <div ref={ref} className="mb-4">
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium text-text-primary">{name}</span>
        <span className="text-text-muted">{percentage}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-bg-tertiary">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="bg-bg-primary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-3xl font-bold text-text-primary">My Skills</h2>
        <p className="mb-12 max-w-2xl text-text-secondary">
          A diverse skill set honed over years of professional experience in design and development.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
