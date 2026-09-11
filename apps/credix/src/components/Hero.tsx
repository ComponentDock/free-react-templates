import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://picsum.photos/seed/credix-hero/1600/900')",
      }}
    >
      <div className="px-4 py-20 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-400">
          2 years interest
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
          get your <span className="text-gold-400">loan</span> now
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-200">
          Vestibulum eu vehicula elit, nec elementum orci. Praesent aliquet vestibulum tempus.
          Pellentesque posuere pharetra turpis, eget finibus erat porta placerat.
        </p>
        <ButtonLink
          href="#features"
          className="mt-8 inline-block rounded bg-gold-400 px-8 py-3 text-sm font-bold text-navy-700 transition hover:bg-gold-500"
        >
          Discover
        </ButtonLink>
      </div>
    </section>
  )
}
