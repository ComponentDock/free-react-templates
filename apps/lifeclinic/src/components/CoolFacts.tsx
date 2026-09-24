import { facts } from '../data'

export function CoolFacts() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center">
              <p className="text-4xl font-bold text-white sm:text-5xl">{fact.value}</p>
              <p className="mt-2 text-sm text-white/80">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
