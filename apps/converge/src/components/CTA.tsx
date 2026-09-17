export interface CTAProps {
  className?: string
}

export function CTA({ className }: CTAProps) {
  return (
    <section id="tickets" className={`relative overflow-hidden bg-cta py-20 ${className ?? ''}`}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/ctabg/1920/600)' }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Get Your Tickets Now!</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80">
          Secure your spot at the biggest marketing conference of the year. Early bird pricing is
          available for a limited time — don&apos;t miss out.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-semibold text-cta transition-colors hover:bg-gray-100"
        >
          Get Tickets
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  )
}
