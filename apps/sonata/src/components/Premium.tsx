import { premiumFeatures } from '../data'

export function Premium() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <h2 className="text-5xl font-bold text-navy lg:text-6xl">Why go Premium</h2>
          <p className="text-muted">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {premiumFeatures.map((feature) => (
            <div key={feature.title}>
              <img
                src={feature.image}
                alt={feature.title}
                loading="lazy"
                className="mx-auto h-48 w-48 rounded-full object-cover"
              />
              <h4 className="mt-6 text-center text-xl font-semibold text-navy">{feature.title}</h4>
              <p className="mt-2 text-center text-sm text-muted">{feature.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
