import { BarChart3, Smartphone, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Testimonial {
  title: string
  quote: string
  author: string
  icon: LucideIcon
}

const testimonials: Testimonial[] = [
  {
    title: 'User Collaboration',
    quote:
      'Boost brought our remote team together — planning, feedback, and decisions all live in one place.',
    author: 'Olivia Bennett',
    icon: Users,
  },
  {
    title: 'Mobile Integration',
    quote:
      'The mobile experience is seamless. I run my whole day from the app without missing a beat.',
    author: 'Liam Carter',
    icon: Smartphone,
  },
  {
    title: 'Smart Analytics',
    quote: 'The dashboards give us answers in seconds that used to take our analysts an afternoon.',
    author: 'Sophia Reed',
    icon: BarChart3,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white">
          What People Says
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-mist dark:text-gray-400">
          Teams around the world use Boost to get more done every day.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.title}
              className="rounded-xl border border-line bg-paper p-7 dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">{item.title}</h3>
              <blockquote className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-ink dark:text-white">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
