import { cn } from '@free-react-templates/ui'

interface HeroBannerProps {
  className?: string
}

export function HeroBanner({ className }: HeroBannerProps) {
  return (
    <section
      className={cn('relative w-full h-[500px] md:h-[600px] overflow-hidden', className)}
      aria-label="Hero banner"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/curemark-hero/1920/1080')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-3xl">
          The Best Medical Services
        </h1>
        <p className="text-base sm:text-lg mb-8 max-w-2xl text-gray-200">
          We provide comprehensive healthcare solutions with experienced doctors and
          state-of-the-art facilities to ensure the best treatment for our patients.
        </p>
        <a
          href="#about"
          className="gradient-bg text-white px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Read More
        </a>
      </div>
    </section>
  )
}
