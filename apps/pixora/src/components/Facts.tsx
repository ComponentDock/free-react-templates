import { facts } from '../data'

export function Facts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 px-6 text-center lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.caption}>
            <p className="text-5xl font-semibold text-ink">{fact.number}</p>
            <p className="mt-2 text-2xl font-extralight text-brand">{fact.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
