import { Baby, Smile, GraduationCap } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const programs = [
  {
    icon: Baby,
    title: 'Tiny Tots (2-3 yrs)',
    text: 'Sensory play, music, and movement activities designed for our youngest learners to develop motor skills and social awareness.',
    color: 'bg-brand-yellow',
  },
  {
    icon: Smile,
    title: 'Little Explorers (3-5 yrs)',
    text: 'Interactive learning through stories, art, and guided play that builds early literacy and numeracy skills.',
    color: 'bg-brand-pink',
  },
  {
    icon: GraduationCap,
    title: 'Big Beginnings (5-6 yrs)',
    text: 'Pre-school readiness program focusing on reading, writing, and math fundamentals through engaging projects.',
    color: 'bg-brand-blue',
  },
] as const

export function Programs() {
  return (
    <section id="programs" aria-label="Programs" className="bg-brand-green py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center font-display text-lg font-semibold text-brand-yellow">
          Our Curriculum
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-white sm:text-4xl">
          Learning Programs
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {programs.map(({ icon: Icon, title, text, color }) => (
            <article
              key={title}
              className="rounded-xl bg-white p-8 text-center transition-shadow hover:shadow-lg"
            >
              <span
                className={cn(
                  'mx-auto flex h-16 w-16 items-center justify-center rounded-full',
                  color,
                )}
              >
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-brand-dark">{title}</h3>
              <p className="mt-4 leading-relaxed text-gray-600">{text}</p>
              <a
                href="#contact"
                className="btn-pill mt-6 inline-block border-2 border-brand-green px-6 py-2 text-sm font-bold text-brand-green hover:bg-brand-green hover:text-white transition-colors"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
