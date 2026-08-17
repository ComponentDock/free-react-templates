import { ArrowRight, Package } from 'lucide-react'
import { inquiryCta, inquiryCtaHref, inquiryText, inquiryTitle } from '../data'

export function InquiryCard() {
  return (
    <section aria-label="Business inquiry" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="-mt-[200px] grid bg-white shadow-[0_15px_30px_0_rgba(0,0,0,0.1)] md:grid-cols-[250px_1fr]">
          <div className="flex items-center justify-center bg-faint p-7">
            <span className="relative flex h-20 w-20 items-center justify-center">
              <span aria-hidden="true" className="absolute inset-0 rounded-full bg-brand-soft" />
              <Package aria-hidden="true" className="relative h-12 w-12 text-brand" />
            </span>
          </div>
          <div className="p-7 md:p-9">
            <h2 className="font-serif text-2xl font-bold text-ink">{inquiryTitle}</h2>
            <p className="mt-3 text-muted">{inquiryText}</p>
            <a
              href={inquiryCtaHref}
              className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-deep transition-colors hover:text-brand"
            >
              {inquiryCta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
