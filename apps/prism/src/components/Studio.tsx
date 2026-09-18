import { ArrowRight } from 'lucide-react'

export function Studio() {
  return (
    <section id="studio" className="relative bg-primary-400 py-20">
      <div className="absolute inset-0 bg-primary-400/80" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_2fr]">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/prism-studio/400/400"
            alt="Studio workspace"
            className="w-full max-w-xs rounded object-cover"
            loading="lazy"
          />
        </div>
        <div className="rounded-r bg-white px-8 py-10 sm:px-16">
          <h2 className="font-display text-3xl font-semibold text-ink">Green Forest Studio</h2>
          <p className="mt-4 text-sm leading-relaxed text-smoke">
            Few would argue that, despite the advancements of feminism over the past three decades,
            women still face a double standard when it comes to their behavior. While men's
            borderline-inappropriate behavior is often laughed off as "boys will be boys," women
            face higher conduct standards — especially in the workplace. That's why it's crucial
            that, as women, our behavior on the job is beyond reproach.
          </p>
          <a
            href="#achievements"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-400 px-8 py-3 text-sm font-medium uppercase text-ink transition-colors hover:bg-primary-400 hover:text-white"
          >
            View More
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
