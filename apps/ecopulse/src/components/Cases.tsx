import { useEffect, useRef, useState } from 'react'

interface CaseCardProps {
  title: string
  description: string
  percentage: number
  image: string
  stat: string
}

function CaseCard({ title, description, percentage, image, stat }: CaseCardProps) {
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProgress(percentage)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )

    // ref.current is always set after the first render (div always mounts)
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [percentage])

  return (
    <div ref={ref} className="overflow-hidden rounded-lg border border-divider bg-white">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-ink">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-body">{description}</p>

        {/* Progress bar */}
        <div className="mb-2 h-2.5 w-full overflow-hidden rounded-full bg-divider">
          <div
            className="h-full rounded-full bg-brand transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-mist">Progress</span>
          <span className="font-semibold text-brand">{stat}</span>
        </div>
      </div>
    </div>
  )
}

const cases = [
  {
    title: 'Wildlife in Danger',
    description:
      'Our anti-poaching programs have reduced illegal hunting incidents by 70% in targeted regions.',
    percentage: 70,
    image: 'https://picsum.photos/seed/ecopulse-case1/600/400',
    stat: '70%',
  },
  {
    title: 'Our Green Projects',
    description:
      'Over 25% of our reforestation goals have been achieved, planting thousands of trees annually.',
    percentage: 25,
    image: 'https://picsum.photos/seed/ecopulse-case2/600/400',
    stat: '25%',
  },
  {
    title: 'Water Conservation',
    description:
      'Our clean water initiative has reached 50% of targeted communities with safe drinking water.',
    percentage: 50,
    image: 'https://picsum.photos/seed/ecopulse-case3/600/400',
    stat: '50%',
  },
]

export function Cases() {
  return (
    <section id="projects" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-subtitle-green">
            Our Projects
          </span>
          <h2 className="text-3xl font-bold text-ink lg:text-4xl">Our Cases</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
