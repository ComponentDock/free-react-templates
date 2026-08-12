import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { btnWhitePill } from '../brand'
import { planFeatures, pricingPlans } from '../data'

/* Wave path + viewBox taken from the original's inline SVG
   (viewBox="0 0 1920 218", preserveAspectRatio="none"). */
const WAVE_PATH = 'M0,0 V210 S500,218 860,193 S1400,125 1920,155 V0 H0'

/* "The package 4 you" — three plan cards with a gradient wave header, a
   white price, a five-feature check list and an "order plan" pill. Hover:
   gradient card background + drop shadow, white list text, yellow button
   (replicated from the original's pricing_item hover state). */
export function Pricing() {
  return (
    <section id="pricing" className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[36px] font-semibold text-[#2c2c2c]">The package 4 you</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-steel-400">
            Ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque
          </p>
        </div>

        <div className="mt-[104px] grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className="group relative overflow-hidden rounded-lg border-2 border-border-card bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0px_21px_29px_rgba(0,0,0,0.41)]"
            >
              {/* Hover gradient background */}
              <div
                className="bg-brand-gradient absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="relative h-[218px]">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 1920 218"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path fill={`url(#wave-${plan.name})`} d={WAVE_PATH} />
                    <path
                      fill={`url(#wave-${plan.name}-hover)`}
                      className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      d={WAVE_PATH}
                    />
                    <defs>
                      <linearGradient id={`wave-${plan.name}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#487fee" />
                        <stop offset="100%" stopColor="#b632fa" />
                      </linearGradient>
                      <linearGradient id={`wave-${plan.name}-hover`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#9cb9f6" />
                        <stop offset="100%" stopColor="#d691fc" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-sm font-semibold uppercase tracking-wider">{plan.name}</h3>
                    <p className="mt-2 text-[48px] font-medium leading-none">
                      {plan.priceWhole}
                      {plan.priceFraction && (
                        <span className="ml-0.5 text-2xl align-top">{plan.priceFraction}</span>
                      )}
                    </p>
                    <div className="mt-2 text-sm">{plan.period}</div>
                  </div>
                </div>

                <ul className="px-10 py-8">
                  {planFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 py-1.5 text-sm font-medium text-steel-400 transition-colors duration-300 group-hover:text-white"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-brand-500 transition-colors duration-300 group-hover:text-white"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="px-10 pb-10">
                  <a
                    href="#contact"
                    className={cn(
                      btnWhitePill,
                      'block w-full transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-white',
                    )}
                  >
                    order plan
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-sm text-steel-400">
          Ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit arcu, scelerisque
          dignissim massa quis, mattis facilisis erat. Aliquam erat.
        </p>
      </div>
    </section>
  )
}
