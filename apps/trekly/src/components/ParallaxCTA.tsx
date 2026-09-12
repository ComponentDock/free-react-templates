import { ChevronRight } from 'lucide-react'

interface ParallaxCTAProps {
  heading: string
  image: string
  href?: string
}

export function ParallaxCTA({ heading, image, href = '#destinations' }: ParallaxCTAProps) {
  return (
    <section
      className="relative flex min-h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-ocean-900/60" />
      <div className="relative z-10 px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">{heading}</h2>
        <a
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-ocean-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-ocean-500"
        >
          Discover <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
