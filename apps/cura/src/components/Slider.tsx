import { useState } from 'react'
import { Calendar, HeartPulse, ShieldCheck, Siren } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    icon: ShieldCheck,
    title: 'We Accept Most Major Insurance Plans',
    text: 'Cura partners with leading insurers so you can focus on getting well, not on paperwork.',
  },
  {
    icon: HeartPulse,
    title: 'Patients Love Our Care',
    text: 'Rated 4.9 out of 5 by more than 2,500 verified patient reviews across our clinics.',
  },
  {
    icon: Calendar,
    title: 'Same-Day Appointments',
    text: 'Urgent care slots are available every weekday — book online in under two minutes.',
  },
  {
    icon: Siren,
    title: '24/7 Emergency Support',
    text: 'Our emergency hotline is staffed around the clock by trained medical coordinators.',
  },
] as const

export function Slider() {
  const [active, setActive] = useState(0)
  // `active` is always a valid index: it is only ever set by the dot buttons,
  // each of which maps 1:1 to a slide.
  const slide = slides[active]!

  return (
    <section aria-label="Patient highlights" className="bg-green-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div
          key={active}
          className="mx-auto flex max-w-3xl items-center gap-4 rounded-2xl bg-white p-6 shadow-sm sm:gap-6 sm:p-8 dark:bg-gray-800"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/60 dark:text-primary-300">
            <slide.icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
              {slide.title}
            </h2>
            <p className="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-300">
              {slide.text}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === active}
              className={cn(
                'h-2.5 rounded-full transition-all',
                index === active ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
