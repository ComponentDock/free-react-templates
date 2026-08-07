import { ArrowUpRight } from 'lucide-react'

type DemoVariant = {
  title: string
  gradient: string
}

const homeVariants: DemoVariant[] = [
  {
    title: 'Home One / background Slider',
    gradient: 'from-brand via-punch to-ink',
  },
  {
    title: 'Home Two / Paralax Slider',
    gradient: 'from-ink via-punch to-brand',
  },
  {
    title: 'Home Three / Gradiant Paralax',
    gradient: 'from-punch via-brand to-ink',
  },
  {
    title: 'Home Four / Gradiant Color',
    gradient: 'from-brand via-fuchsia-500 to-ink',
  },
  {
    title: 'Home Five / Gradiant Warm Canvas',
    gradient: 'from-rose-400 via-brand to-amber-300',
  },
  {
    title: 'Home Six / background video',
    gradient: 'from-gray-800 via-ink to-black',
  },
]

const blogVariants: DemoVariant[] = [
  { title: 'blog standard', gradient: 'from-gray-200 via-gray-300 to-gray-400' },
  { title: 'blog with sidebar', gradient: 'from-gray-100 via-gray-200 to-gray-400' },
  { title: 'blog left sidebar', gradient: 'from-gray-200 via-gray-100 to-gray-400' },
  { title: 'blog details', gradient: 'from-gray-300 via-gray-200 to-gray-100' },
]

function DemoCard({ title, gradient }: DemoVariant) {
  return (
    <article className="overflow-hidden rounded bg-white shadow-[0_0_13px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:bg-gray-900">
      <a href="#home" aria-label={`View demo: ${title}`} className="group block">
        <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${gradient}`}>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink transition-transform group-hover:scale-110">
            <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
      </a>
      <div className="flex min-h-20 items-center justify-center bg-fog px-4 py-5 text-center dark:bg-gray-800">
        <h3 className="font-mono text-sm uppercase tracking-wide text-punch">{title}</h3>
      </div>
    </article>
  )
}

export function Demos() {
  return (
    <section id="demos" className="bg-paper py-20 dark:bg-gray-950" aria-label="Demos">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Demo Showcase
          </p>
          <h2 className="mt-4 text-3xl font-bold text-ink dark:text-white">
            Choose your favorite demo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
            Ten distinct layouts, faithfully rebuilt — six home page variants with slider, parallax,
            gradient, and video backgrounds, plus four classic blog layouts.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {homeVariants.map((variant) => (
            <DemoCard key={variant.title} {...variant} />
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogVariants.map((variant) => (
            <DemoCard key={variant.title} {...variant} />
          ))}
        </div>
      </div>
    </section>
  )
}
