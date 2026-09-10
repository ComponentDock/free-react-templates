import { cn } from '@free-react-templates/ui'

interface StatProps {
  value: string
  label: string
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <p className="text-4xl font-extrabold text-brand sm:text-5xl">{value}</p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className={cn(
        'relative flex min-h-screen items-center',
        'bg-[url("https://picsum.photos/seed/minima-hero/1920/1080")] bg-cover bg-center',
      )}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: stats */}
          <div className="flex items-center justify-center gap-8 lg:justify-end lg:pr-8">
            <Stat value="400+" label="Successful projects" />
            <Stat value="21+" label="Years of experience" />
          </div>

          {/* Right: content */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              We Create Modern &amp; Minimal Websites
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country.
            </p>
            <a
              href="#portfolio"
              className={cn(
                'mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-bold text-white',
                'transition-colors hover:bg-brand-dark',
              )}
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
