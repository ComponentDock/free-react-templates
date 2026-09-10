import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/bidcraft-hero/1600/800')" }}
    >
      <div className="absolute inset-0 bg-ink/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          The Best Place to Buy and Sell
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
          Discover amazing items at unbeatable prices. Register today and start bidding on thousands
          of unique products.
        </p>
        <div className="mt-8">
          <ButtonLink
            href="#cta"
            className="inline-block bg-primary-400 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-500"
          >
            Register
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
