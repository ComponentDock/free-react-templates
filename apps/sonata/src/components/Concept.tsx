import { conceptItems } from '../data'

export function Concept() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <h2 className="text-5xl font-bold text-navy lg:text-6xl">Our Concept &amp; artists</h2>
          <p className="text-muted">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {conceptItems.map((item) => (
            <div key={item.label}>
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="aspect-square w-full rounded-[40px] object-cover"
              />
              <h5 className="mt-6 text-center text-lg font-semibold text-navy">{item.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
