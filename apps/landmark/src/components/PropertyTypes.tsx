import { Building2, Castle, DoorOpen, Home } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Category } from '../data'
import { PROPERTY_TYPES } from '../data'

const ICONS: Record<string, LucideIcon> = {
  home: Home,
  villa: Castle,
  studio: DoorOpen,
  office: Building2,
}

interface PropertyTypesProps {
  categories?: Category[]
}

export function PropertyTypes({ categories = PROPERTY_TYPES }: PropertyTypesProps) {
  return (
    <section className="bg-light py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-medium leading-tight text-ink">
            Explore
            <br /> by Property Type
          </h2>
          <p className="mt-4 text-lg font-light text-muted">
            Browse our catalogue by the kind of space you are looking for.
          </p>
          <a
            href="#properties"
            className="mt-8 inline-block rounded bg-brand px-8 py-4 text-lg text-white transition-colors hover:bg-navy"
          >
            View All Property
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
          {categories.map((category) => {
            const Icon = ICONS[category.icon] ?? Home
            return (
              <div
                key={category.title}
                className="flex flex-col items-center bg-white px-6 py-10 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-medium text-ink">{category.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
