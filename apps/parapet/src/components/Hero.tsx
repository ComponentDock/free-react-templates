import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '25+', label: 'Years Experience' },
  { value: '98%', label: 'On-time Delivery' },
  { value: '12', label: 'Industry Awards' },
] as const

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://picsum.photos/seed/parapet-1/1920/1080"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gray-900/80" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Trusted by 500+ clients since 1998
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Building Tomorrow&apos;s <span className="text-primary-400">Landmarks</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
            We deliver exceptional quality construction for residential and commercial projects.
            From concept to completion, our expert team ensures every detail meets the highest
            standards.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="#contact"
              className="rounded-lg bg-primary-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700"
            >
              Get Free Estimate
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="#projects"
              className="rounded-lg border-2 border-white/20 px-8 py-4 text-base font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              View Our Projects
            </ButtonLink>
          </div>

          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-3xl font-bold text-primary-400 lg:text-4xl">{stat.value}</dd>
                <dt className="mt-1 text-sm text-gray-400">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
