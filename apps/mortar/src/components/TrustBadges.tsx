import { trust } from '../data'

export function TrustBadges() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {trust.kicker}
        </span>
        <h2 className="mt-2 text-3xl font-medium text-ink md:text-4xl">{trust.heading}</h2>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {trust.clients.map((client) => (
            <li
              key={client}
              className="text-lg font-semibold text-gray-500 transition-colors hover:text-charcoal"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
