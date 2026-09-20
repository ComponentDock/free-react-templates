import { BookOpen, Palette, TreePine } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  {
    icon: BookOpen,
    title: 'Playful Learning',
    text: 'Engaging curriculum designed to spark curiosity and foster a love for learning through interactive activities.',
    color: 'bg-brand-pink',
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    text: 'Express yourself through painting, music, dance, and storytelling in our dedicated creative studios.',
    color: 'bg-brand-yellow',
  },
  {
    icon: TreePine,
    title: 'Nature Exploration',
    text: 'Outdoor adventures and nature walks that teach environmental awareness and build confidence.',
    color: 'bg-brand-green',
  },
] as const

export function Features() {
  return (
    <section id="features" aria-label="Features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center font-display text-lg font-semibold text-brand-pink">
          Why Choose Us
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-brand-dark sm:text-4xl">
          Our Special Features
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text, color }) => (
            <article
              key={title}
              className="rounded-xl bg-brand-light p-8 text-center transition-shadow hover:shadow-lg"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
