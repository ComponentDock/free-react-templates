import { cn } from '@free-react-templates/ui'

export interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        'relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat py-32',
        className,
      )}
      style={{
        backgroundImage: `url('https://picsum.photos/seed/bizplanner-hero/1920/800')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-4xl font-bold uppercase text-white md:text-5xl lg:text-6xl">
          Hello We&apos;re <span className="text-primary-500">BizPlanner</span>
        </h1>
        <p className="mb-8 text-lg text-gray-300">Sub Head, Motto or Mission subtitle</p>
        <a
          href="#project-section"
          className={cn(
            'inline-block border border-primary-500 px-8 py-3 text-sm font-semibold uppercase text-primary-500',
            'transition-colors hover:bg-primary-500 hover:text-white',
          )}
        >
          See Our Projects
        </a>
      </div>
    </section>
  )
}
