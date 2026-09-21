export function CtaBanner() {
  return (
    <section id="cta" className="py-16 bg-brand">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="font-heading text-3xl sm:text-4xl font-bold text-white">
          Get your{' '}
          <a
            href="#pricing"
            className="underline underline-offset-4 decoration-white/50 hover:decoration-white transition-colors"
          >
            subscription
          </a>{' '}
          now!
        </p>
      </div>
    </section>
  )
}
