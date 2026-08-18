import { brandLogos } from '../data'

export function Brands() {
  return (
    <section aria-label="Brands" className="bg-white pb-[100px] pt-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-body">
          We work with global brands
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {brandLogos.map((name) => (
            <li
              key={name}
              className="font-display text-xl font-semibold tracking-wide text-body/50"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
