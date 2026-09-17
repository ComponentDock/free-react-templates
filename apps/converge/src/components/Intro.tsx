export interface IntroProps {
  className?: string
}

export function Intro({ className }: IntroProps) {
  return (
    <section className={`bg-white py-20 ${className ?? ''}`}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-navy md:text-4xl">The Best Marketing Conference</h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-body">
          Join industry leaders and marketing professionals for three days of insightful talks,
          hands-on workshops, and unparalleled networking opportunities that will transform your
          approach to digital marketing.
        </p>
        <a
          href="#tickets"
          className="mt-8 inline-flex items-center gap-2 rounded bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
        >
          Get Tickets
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  )
}
