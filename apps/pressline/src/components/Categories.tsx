import { BookA, Heart, Palette, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface CategoryCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const categories = [
  {
    icon: BookA,
    title: "Children's Books",
    description: 'Stories that spark imagination and wonder in young readers everywhere.',
  },
  {
    icon: Heart,
    title: 'Romance',
    description: 'Tales of love and connection that touch the heart and stir the soul.',
  },
  {
    icon: Palette,
    title: 'Art & Architecture',
    description: 'Explore the beauty of creative expression through visual storytelling.',
  },
  {
    icon: Clock,
    title: 'History',
    description: 'Journey through time with carefully curated historical narratives.',
  },
] as const

function CategoryCard({ icon: Icon, title, description }: CategoryCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary-300 text-primary-300 transition-colors hover:bg-primary-300 hover:text-white">
        <Icon className="h-8 w-8" aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-smoke">{description}</p>
    </div>
  )
}

export function Categories() {
  return (
    <section id="categories" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
