import { ArrowRight } from 'lucide-react'

export function Support() {
  return (
    <section className="bg-light-gray py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-[44px] font-bold leading-[1.4] text-navy">
            Professional who works to help with your business.
          </h2>
          <p className="mb-8 text-navy-gray">
            Apply for a business loan today and, if approved, you could enjoy the first 8 weeks with
            no repayments. Get the breathing space now, and we&apos;ll extend your term at the other
            end.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-[5px] bg-brand px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-navy"
          >
            Get Started
            <ArrowRight size={16} />
          </a>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/crest-support/600/500"
            alt="Support"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
