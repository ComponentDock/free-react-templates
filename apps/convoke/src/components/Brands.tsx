import { brandNames } from '../data'

export function Brands() {
  return (
    <section id="venue" aria-label="Sponsors" className="bg-tint-2 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="sr-only">Sponsors</h2>
        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {brandNames.map((name) => (
            <span
              key={name}
              data-brand
              className="cursor-pointer text-center text-xl font-bold tracking-widest text-heading/40 grayscale transition-all duration-300 hover:text-heading hover:grayscale-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
