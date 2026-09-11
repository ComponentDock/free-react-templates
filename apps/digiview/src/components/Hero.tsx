import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn('flex min-h-screen items-center bg-darker pt-20 text-white', className)}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            We are a <span className="text-brand">digital agency</span> focused on growth
          </h1>
          <p className="max-w-lg text-lg text-gray-400">
            We help businesses grow with innovative digital strategies, creative design, and
            cutting-edge technology solutions.
          </p>
          <a
            href="#contact"
            className="inline-block rounded bg-brand px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-brand-dark"
          >
            Get in touch
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/digiview-hero/640/480"
            alt="Digital agency workspace"
            className="rounded-2xl object-cover shadow-2xl"
            width={640}
            height={480}
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
