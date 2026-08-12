import { useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const TESTIMONIALS = [
  {
    name: 'John Smith',
    role: 'XYZ Inc. Client',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed congue arcu, in pretium nisl. Integer ornare, nisi vitae fringilla.',
    seed: 'forge-7',
  },
  {
    name: 'Joshua Darren',
    role: 'XYZ Inc. Client',
    quote:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.',
    seed: 'forge-8',
  },
  {
    name: 'Megan Ruiz',
    role: 'XYZ Inc. Client',
    quote:
      'Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    seed: 'forge-9',
  },
  {
    name: 'Sofia Alvarez',
    role: 'XYZ Inc. Client',
    quote:
      'Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna.',
    seed: 'forge-10',
  },
] as const

/* Testimonials recreated from the source's light "Testimonial" carousel:
   white quote cards (round avatar, name, role, blockquote) rotating via
   prev/next controls and dot indicators. */

export function Testimonials() {
  const [active, setActive] = useState(0)

  const goTo = useCallback((index: number) => {
    setActive(((index % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  const current = TESTIMONIALS[active]!

  return (
    <section id="testimonials" className="bg-surface py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light uppercase text-body lg:text-5xl">Testimonial</h2>
        <div className="mt-12 rounded bg-white p-10 shadow-sm">
          <img
            src={`https://picsum.photos/seed/${current.seed}/120/120`}
            alt={`Portrait of ${current.name}`}
            className="mx-auto h-[60px] w-[60px] rounded-full object-cover"
          />
          <div className="mt-3">
            <h3 className="text-xl font-normal text-body">{current.name}</h3>
            <span className="text-sm text-secondary">{current.role}</span>
          </div>
          <blockquote className="mt-6 text-lg italic leading-relaxed text-body">
            “{current.quote}”
          </blockquote>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(active - 1)}
            className="rounded-full border border-gray-300 p-2 text-body transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === active ? 'true' : undefined}
                onClick={() => goTo(i)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                  i === active ? 'bg-brand' : 'bg-gray-300 hover:bg-gray-400',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(active + 1)}
            className="rounded-full border border-gray-300 p-2 text-body transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
