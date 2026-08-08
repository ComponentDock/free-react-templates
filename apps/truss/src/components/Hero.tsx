import { ArrowRight } from 'lucide-react'

const stats = [
  { number: '25', unit: 'Years', label: 'experience' },
  { number: '159', unit: 'Projects', label: 'build' },
  { number: '298', unit: 'Number', label: 'people' },
] as const

export function Hero() {
  return (
    <section id="home" className="bg-white pb-24 pt-16 dark:bg-gray-950 sm:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink dark:text-white sm:text-6xl lg:text-7xl">
            Creates Smart Architecture.
          </h1>

          <div className="lg:ml-auto lg:max-w-md">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-faint">
              Intro
            </p>
            <p className="text-base leading-relaxed text-mist dark:text-white/60">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <a
              href="#about"
              aria-label="Read more"
              className="mt-6 inline-flex h-[60px] w-[60px] items-center justify-center bg-brand text-white transition-colors hover:bg-brand-hover"
            >
              <ArrowRight className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.number}>
              <strong className="font-display text-4xl font-bold text-ink dark:text-white sm:text-5xl">
                <span className="text-brand">{stat.number}</span>
              </strong>
              <span className="mt-1 block text-sm font-medium text-ink dark:text-white">
                {stat.unit}
              </span>
              <span className="block text-sm text-mist dark:text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>

        <div id="about" className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/truss-1/900/650"
              alt="Modern living space designed by Truss"
              className="w-full rounded-sm object-cover"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/truss-2/500/700"
              alt="Bright reading corner with a wooden chair"
              className="absolute -bottom-10 right-0 hidden w-2/5 border-8 border-white object-cover shadow-xl sm:block dark:border-gray-950"
              loading="lazy"
            />
          </div>

          <div className="lg:pl-10">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-faint">
              Mission
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink dark:text-white sm:text-4xl">
              Architectures for Complex Projects
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-mist dark:text-white/60">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <a
              href="#services"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-hover"
            >
              Read more
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
