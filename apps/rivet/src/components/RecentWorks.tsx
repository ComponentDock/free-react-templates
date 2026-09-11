import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ButtonLink } from '@free-react-templates/ui'

const works = [
  { id: 1, title: 'Modern Office Complex' },
  { id: 2, title: 'Residential Tower' },
  { id: 3, title: 'Industrial Facility' },
]

export function RecentWorks() {
  return (
    <section id="works" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold text-heading">Recent Works</h2>
        <div className="mb-12 h-1 w-16 bg-brand" />

        <div className="grid gap-6 md:grid-cols-3">
          {works.map((work) => (
            <div key={work.id} className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/rivet-work-${work.id}/400/300`}
                alt={work.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Plus className="mb-2 text-white" size={32} />
                <h3 className="text-lg font-semibold text-white">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#works"
            variant="primary"
            className={cn('bg-brand hover:bg-brand-dark')}
          >
            View All Works
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
