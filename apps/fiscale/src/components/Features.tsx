import { ArrowRight } from 'lucide-react'
import { FEATURE_ROWS } from '../data'
import { PillLink } from './Pill'
import { cn } from '@free-react-templates/ui'

/* Features — centered heading plus three alternating image/text rows
   numbered with green circles (row two is reversed on desktop). */
export function Features() {
  return (
    <section aria-label="Features" className="bg-light pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-[34px] font-bold text-accent">Features</h2>
          <p className="mt-3 leading-relaxed text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="space-y-16">
          {FEATURE_ROWS.map((row) => (
            <div
              key={row.number}
              data-testid="feature-row"
              className={cn(
                'flex flex-col items-center gap-10 lg:flex-row lg:justify-between',
                row.reversed && 'lg:flex-row-reverse',
              )}
            >
              <div className="lg:w-1/2">
                <img
                  src={row.image}
                  alt={`${row.title} illustration`}
                  width={560}
                  height={420}
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
              <div className="lg:w-5/12">
                <span className="mb-7 flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-base font-bold text-white">
                  {row.number}
                </span>
                <h3 className="font-display text-2xl font-bold text-brand">{row.title}</h3>
                <p className="my-5 leading-relaxed text-body">{row.text}</p>
                <PillLink href="#services-section" variant="primary">
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </PillLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
