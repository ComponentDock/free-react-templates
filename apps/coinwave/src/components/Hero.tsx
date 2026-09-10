export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center pt-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/coinwave-hero/1920/600)',
      }}
    >
      <div className="absolute inset-0 bg-[#04091e]/85" />
      <div className="relative z-10 mx-auto max-w-[1170px] px-4 sm:px-6">
        <p className="mb-4 text-[13px] uppercase tracking-widest text-white/70">
          Currently Purchase Rate
        </p>
        <h1 className="mb-6 text-[72px] font-bold leading-none text-white sm:text-[100px]">
          $12,356
        </h1>
        <p className="mb-8 max-w-lg text-[15px] font-light leading-7 text-white/70">
          CoinWave is a cryptocurrency landing page. We focus on a clean conversion experience with
          real-time price data and simple tools.
        </p>
        <a
          href="#convert"
          className="inline-block rounded-[3px] bg-orange-brand px-8 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white"
        >
          Buy Bitcoin
        </a>
      </div>
    </section>
  )
}
