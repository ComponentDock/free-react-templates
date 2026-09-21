import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn('relative h-screen flex items-center', className)}
      data-testid="hero"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/crispshot-hero/1920/1080"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Hello
            <br />
            I&apos;m Jackson
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            I photograph very instinctively. I see how it is taken like that. I do not follow
            certain styles, philosophies or teachers.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full border-2 border-white text-white text-sm font-medium hover:bg-brand hover:border-brand transition-all duration-300"
            >
              Get a Quote
            </a>
            <a
              href="mailto:hello.crispshot@gmail.com"
              className="text-white/80 text-sm hover:text-white transition-colors"
            >
              hello.crispshot@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
