import { brands } from '../data'

export function Brands() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-16 w-32 items-center justify-center rounded bg-gray-100"
            >
              <span className="text-sm font-medium text-gray-400">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
