import { useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

const classes = [
  {
    id: 'body-building',
    title: 'Body Building',
    description:
      'Body Building, the original barbell class, will sculpt, tone and strengthen your entire body, fast! Focusing on low weight loads and high repetition movements, you will burn fat, gain strength and quickly produce lean body muscle conditioning.',
    image: 'https://picsum.photos/seed/ironshed-class1/600/400',
    thumbnail: 'https://picsum.photos/seed/ironshed-thumb1/120/80',
  },
  {
    id: 'racing-running',
    title: 'Racing Running',
    description:
      'Get your heart pumping with an exhilarating running session designed to boost endurance and burn calories. Our expert trainers will guide you through interval training that pushes your limits.',
    image: 'https://picsum.photos/seed/ironshed-class2/600/400',
    thumbnail: 'https://picsum.photos/seed/ironshed-thumb2/120/80',
  },
  {
    id: 'yoga-fitness',
    title: 'Yoga Fitness',
    description:
      'Improve flexibility, balance, and mental clarity through guided yoga sessions. Our classes blend traditional poses with modern fitness techniques for a complete mind-body workout.',
    image: 'https://picsum.photos/seed/ironshed-class3/600/400',
    thumbnail: 'https://picsum.photos/seed/ironshed-thumb3/120/80',
  },
  {
    id: 'kick-boxing',
    title: 'Kick Boxing',
    description:
      'Unleash your energy with high-intensity kick boxing combinations. This full-body workout improves coordination, builds strength, and provides an incredible cardio challenge.',
    image: 'https://picsum.photos/seed/ironshed-class4/600/400',
    thumbnail: 'https://picsum.photos/seed/ironshed-thumb4/120/80',
  },
  {
    id: 'cardio-workout',
    title: 'Cardio Workout',
    description:
      'Elevate your heart rate with our dynamic cardio sessions. A variety of equipment and exercises keep every workout fresh while maximizing calorie burn and cardiovascular health.',
    image: 'https://picsum.photos/seed/ironshed-class5/600/400',
    thumbnail: 'https://picsum.photos/seed/ironshed-thumb5/120/80',
  },
  {
    id: 'martial-arts',
    title: 'Martial Arts',
    description:
      'Combine discipline, technique, and fitness in our martial arts classes. Learn self-defense while building strength, agility, and mental focus in a supportive environment.',
    image: 'https://picsum.photos/seed/ironshed-class6/600/400',
    thumbnail: 'https://picsum.photos/seed/ironshed-thumb6/120/80',
  },
] as const

export function Classes() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = classes[activeIndex]!

  return (
    <section id="classes" aria-label="Classes" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="relative pl-6">
            <span className="absolute left-0 top-1 h-[29px] w-[3px] bg-brand" />
            <h2 className="font-heading text-3xl font-semibold text-section-title sm:text-4xl">
              Our Class
            </h2>
            <p className="mt-3 max-w-md text-body-text">
              Our fitness experts can help you discover new training techniques and exercises that
              offer a dynamic and efficient full-body workout.
            </p>
          </div>
          <ButtonLink
            href="#schedule"
            className="inline-block bg-brand px-8 py-3 font-heading text-xs font-semibold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-dark sm:self-end"
          >
            View All Schedule
          </ButtonLink>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-sm">
            <img
              src={active.image}
              alt={active.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-semibold text-heading">{active.title}</h3>
            <p className="mt-4 leading-relaxed text-description">{active.description}</p>
            <a
              href="#schedule"
              className="mt-6 inline-block font-heading text-sm font-semibold uppercase tracking-[2px] text-brand transition-colors hover:text-brand-dark"
            >
              View Schedule
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {classes.map((cls, index) => (
            <button
              key={cls.id}
              type="button"
              aria-label={`Switch to ${cls.title}`}
              onClick={() => setActiveIndex(index)}
              className={`group flex flex-col items-center gap-2 rounded-sm p-2 transition-all ${
                index === activeIndex
                  ? 'bg-brand/10 ring-2 ring-brand'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <img src={cls.thumbnail} alt="" className="h-12 w-16 object-cover" loading="lazy" />
              <span className="text-xs font-medium text-heading">{cls.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
