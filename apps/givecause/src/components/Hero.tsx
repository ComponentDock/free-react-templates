import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        'relative min-h-[600px] md:min-h-[830px] flex items-center justify-center text-center',
        'bg-cover bg-center',
        className,
      )}
      style={{
        backgroundImage: `url('https://picsum.photos/seed/givecause-hero/1920/900')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-hero text-5xl md:text-7xl font-black text-white uppercase leading-tight mb-6">
          Our Helping to Save the World
        </h1>
        <p className="font-body text-xl md:text-2xl text-white/90 mb-8">
          Together we can make a difference in the lives of those in need
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#causes"
            className="bg-brand text-white px-8 py-3 rounded-[5px] font-heading font-medium hover:bg-brand-hover transition-colors"
          >
            Our Causes
          </a>
          <a
            href="#about"
            className="bg-white text-brand border-2 border-brand px-8 py-3 rounded-[5px] font-heading font-medium hover:bg-brand hover:text-white transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
