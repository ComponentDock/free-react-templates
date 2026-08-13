import { Calculator, FileText, HelpCircle, Package } from 'lucide-react'
import { features } from '../data'

const icons = {
  package: Package,
  help: HelpCircle,
  file: FileText,
  calc: Calculator,
} as const

/** Feature grid (reference `.feature-area`): a 2×2 grid of icon feature
 *  cards (icon, heading, copy, uppercase link with the red hover bar) next
 *  to the "About Our Company" title block with a red CTA button. */
export function Features() {
  return (
    <section id="features" aria-label="Features" className="pt-[100px] pb-20 lg:pt-[150px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-10">
          <div className="grid flex-1 grid-cols-1 gap-x-10 sm:grid-cols-2">
            {features.items.map((item) => {
              const Icon = icons[item.icon]
              return (
                <div key={item.title} className="group mb-14">
                  <Icon className="h-12 w-12 text-brand" aria-hidden="true" />
                  <h4 className="mt-5 font-heading text-[21px] font-normal text-navy">
                    {item.title}
                  </h4>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{item.text}</p>
                  <a href="#quote" className="link-bar mt-4 text-navy">
                    {item.link}
                  </a>
                </div>
              )
            })}
          </div>

          <div className="w-full lg:mt-4 lg:max-w-md">
            <p className="text-xs font-normal tracking-[1px] text-brand uppercase">
              {features.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-[32px] leading-tight font-bold text-navy uppercase lg:text-[42px]">
              {features.heading}
            </h2>
            {features.copy.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-sm leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
            <a
              href="#about"
              className="btn-main mt-10 bg-brand text-white hover:bg-white hover:text-navy"
            >
              {features.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
