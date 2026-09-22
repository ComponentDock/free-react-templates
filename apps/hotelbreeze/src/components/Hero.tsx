import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn('relative flex h-[600px] items-center bg-cover bg-center', className)}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/hotelbreeze-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12">
        <div className="mb-4 flex items-center gap-4">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-white">
            Welcome
          </span>
          <span className="h-px w-12 bg-white" />
        </div>
        <h1 className="mb-8 text-5xl font-light leading-tight text-white md:text-6xl">
          Simple &amp; Elegant
        </h1>
        <a
          href="#rooms"
          className="inline-block bg-white px-8 py-3 text-sm font-medium uppercase tracking-widest text-gray-900 transition-colors hover:bg-gray-100"
        >
          Learn More
        </a>
      </div>

      {/* Slider arrows */}
      <div className="absolute right-6 bottom-24 z-10 flex flex-col gap-2 md:right-12">
        <button
          type="button"
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/10"
        >
          &#8592;
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/10"
        >
          &#8594;
        </button>
      </div>
    </section>
  )
}
