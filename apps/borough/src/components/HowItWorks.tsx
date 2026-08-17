import { Play } from 'lucide-react'
import { howItWorksSubheading, howItWorksTitle, steps, videoPoster, videoUrl } from '../data'

export function HowItWorks() {
  return (
    <section aria-label="How It Works" className="relative bg-navy px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-[13px] font-bold uppercase text-brand">{howItWorksSubheading}</p>
        <h2 className="mt-1 text-[28px] font-bold text-white lg:text-[50px]">{howItWorksTitle}</h2>

        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch how Borough works (opens video)"
          className="relative mt-12 block overflow-hidden rounded-[4px]"
        >
          <img
            src={videoPoster}
            alt=""
            loading="lazy"
            className="h-[300px] w-full object-cover lg:h-[600px]"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="animate-pulse flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
              <Play
                aria-hidden="true"
                className="ml-1 h-[50px] w-[50px] text-brand"
                fill="currentColor"
              />
            </span>
          </span>
        </a>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <article
                key={step.title}
                className="group rounded-[4px] bg-frost p-[30px] text-center transition-colors hover:bg-brand"
              >
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand transition-colors group-hover:bg-white">
                  <Icon
                    aria-hidden="true"
                    className="h-[45px] w-[45px] text-white transition-colors group-hover:text-brand"
                    strokeWidth={1.5}
                  />
                </span>
                <h3 className="mt-5 text-[24px] font-semibold leading-snug text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">{step.copy}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
