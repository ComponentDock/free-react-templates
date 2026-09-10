export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-gold-start to-gold-end py-20">
      <div className="mx-auto max-w-[1170px] px-4 text-center sm:px-6">
        <h2 className="mb-4 text-[30px] font-semibold text-white">Huge Transaction in last Week</h2>
        <p className="mx-auto mb-8 max-w-2xl text-[15px] font-light leading-7 text-white/80">
          Our platform processed over $50 million in transactions last week. Join the growing
          community of users who trust CoinWave for their cryptocurrency needs.
        </p>
        <a
          href="#pricing"
          className="inline-block rounded-[3px] bg-white px-8 py-3 text-sm font-medium text-dark-bg transition-colors hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white"
        >
          Buy Bitcoin Now!
        </a>
      </div>
    </section>
  )
}
