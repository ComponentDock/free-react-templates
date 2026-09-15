import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center bg-no-repeat sm:min-h-[600px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://picsum.photos/seed/cosyhaus-hero/1600/900)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="mb-4 inline-block font-display text-sm font-medium uppercase tracking-[0.25em] text-white/80">
            Welcome to Cosyhaus
          </span>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
            Modern Interior
            <br />
            &amp; Design
          </h1>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Play introduction video"
        className="absolute bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 text-white transition-colors hover:border-brand hover:bg-brand sm:h-16 sm:w-16"
      >
        <Play className="ml-1 h-6 w-6" aria-hidden="true" />
      </a>
    </section>
  )
}
