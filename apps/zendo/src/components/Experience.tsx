import type { ComponentType, SVGProps } from 'react'
import {
  Activity,
  BookOpen,
  Bone,
  Droplet,
  Dumbbell,
  Flower2,
  Heart,
  HeartPulse,
} from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { experience, type ExperienceIcon } from '../data'

const iconMap: Record<ExperienceIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  flower2: Flower2,
  heartpulse: HeartPulse,
  activity: Activity,
  bone: Bone,
  heart: Heart,
  droplet: Droplet,
  'book-open': BookOpen,
  dumbbell: Dumbbell,
}

/** "Experience of Yoga" split section: 4 icon items left (text
 *  right-aligned, icon AFTER the text), a tall center image, 4 icon items
 *  right (text left-aligned, icon BEFORE the text). */
export function Experience() {
  const left = experience.items.slice(0, 4)
  const right = experience.items.slice(4)

  const renderItem = (item: (typeof experience.items)[number], side: 'left' | 'right') => {
    const Icon = iconMap[item.icon]
    return (
      <article
        key={item.title}
        className={cn(
          'flex items-start gap-4',
          side === 'left' ? 'flex-row-reverse text-right' : 'text-left',
        )}
      >
        <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm font-light text-muted">{item.text}</p>
        </div>
      </article>
    )
  }

  return (
    <section id="about-section" aria-label="Experience of Yoga" className="py-16 md:py-[7em]">
      <div className="mx-auto max-w-[1240px] px-4">
        <h2 className="section-title">{experience.heading}</h2>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-8">{left.map((item) => renderItem(item, 'left'))}</div>
          <img
            src={experience.image}
            alt={experience.alt}
            className="mx-auto h-72 w-72 rounded-full object-cover lg:h-96 lg:w-96"
          />
          <div className="flex flex-col gap-8">
            {right.map((item) => renderItem(item, 'right'))}
          </div>
        </div>
      </div>
    </section>
  )
}
