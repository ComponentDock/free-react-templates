import { cn } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-purple-deep)] pt-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 md:flex-row">
        <div className="flex-1 text-white">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider">Hello</p>
          <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">I am Alex Smith</h1>
          <p className="mb-8 text-lg text-white/80">Senior Web Developer</p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className={cn(
                'rounded bg-white px-6 py-3 font-semibold text-[var(--color-purple)] transition-opacity hover:opacity-90',
              )}
            >
              Hire Me
            </a>
            <a
              href="#"
              className="rounded border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-purple)]"
            >
              Get CV
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/smithy-hero/500/600"
            alt="Alex Smith portrait"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
