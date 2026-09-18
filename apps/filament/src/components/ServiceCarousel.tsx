import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ServiceCarouselProps {
  className?: string
}

const services = [
  {
    image: 'https://picsum.photos/seed/filament-svc1/600/400',
    title: 'Service One',
    description:
      'Premium quality service tailored to your needs. We deliver excellence in every project.',
    link: '#service1',
  },
  {
    image: 'https://picsum.photos/seed/filament-svc2/600/400',
    title: 'Service Two',
    description:
      'Innovative solutions that drive results. Our team brings years of expertise to your project.',
    link: '#service2',
  },
  {
    image: 'https://picsum.photos/seed/filament-svc3/600/400',
    title: 'Service Three',
    description: 'Complete end-to-end support from concept to launch. We are your trusted partner.',
    link: '#service3',
  },
]

export function ServiceCarousel({ className }: ServiceCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? services.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === services.length - 1 ? 0 : c + 1))

  const service = services[current]!

  return (
    <section aria-label="Service carousel" className={cn('relative py-24', className)}>
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-black/80" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/filament-svc-bg/1920/1080)',
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-8">
          <button
            onClick={prev}
            aria-label="Previous service"
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:border-brand lg:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex flex-1 flex-col items-center gap-8 lg:flex-row">
            <div className="flex-1">
              <img
                src={service.image}
                alt={service.title}
                className="h-72 w-full rounded-xl object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mb-6 leading-relaxed text-white/70">{service.description}</p>
              <a
                href={service.link}
                className="text-sm font-medium tracking-wider text-brand transition-colors hover:text-white"
              >
                View Details →
              </a>
            </div>
          </div>

          <button
            onClick={next}
            aria-label="Next service"
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:border-brand lg:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
