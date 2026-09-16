import { counters } from '../data'

export function Counter() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-ink">Church Achievements</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {counters.map((c) => (
            <div key={c.label} className="text-center">
              <span className="block text-4xl font-bold text-brand">
                {c.number.toLocaleString()}
              </span>
              <span className="mt-2 block text-sm text-body">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
