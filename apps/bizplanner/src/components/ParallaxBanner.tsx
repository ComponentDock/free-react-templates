import { cn } from '@free-react-templates/ui'

export interface ParallaxBannerProps {
  className?: string
}

export function ParallaxBanner({ className }: ParallaxBannerProps) {
  return (
    <section
      className={cn(
        'relative flex min-h-[400px] items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat py-24',
        className,
      )}
      style={{
        backgroundImage: `url('https://picsum.photos/seed/bizplanner-parallax/1920/500')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          We Create Creative &amp; Best Unique Design
        </h2>
        <a
          href="#contact-section"
          className={cn(
            'inline-block border border-white px-8 py-3 text-sm font-semibold uppercase text-white',
            'transition-colors hover:bg-white hover:text-heading',
          )}
        >
          Let&apos;s Work Together
        </a>
      </div>
    </section>
  )
}
