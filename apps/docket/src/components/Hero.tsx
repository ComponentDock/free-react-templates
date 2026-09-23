import { cn } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/docket-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1
          id="hero-heading"
          className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Don&apos;t Feel Helpless We Fight for Justice
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-[#b2b2b8] sm:text-base">
          Our experienced team of attorneys is dedicated to protecting your rights and fighting for
          the justice you deserve. Let us handle the legal battle while you focus on what matters
          most.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className={cn(
              'inline-block rounded bg-[#007bff] px-8 py-3 text-sm font-semibold text-white',
              'transition-colors hover:bg-[#0069d9]',
            )}
          >
            Contact us
          </a>
          <a
            href="#about"
            className={cn(
              'inline-block rounded border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold text-white',
              'transition-colors hover:bg-white hover:text-[#212529]',
            )}
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  )
}
