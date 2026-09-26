import { Phone } from 'lucide-react'

const brands = ['Brand One', 'Brand Two', 'Brand Three', 'Brand Four', 'Brand Five', 'Brand Six']

export function Brands() {
  return (
    <section className="bg-[var(--color-surface)] py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row">
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex h-24 items-center justify-center rounded bg-gray-200 text-sm text-gray-500"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg bg-white p-8 shadow-md text-center">
            <span className="block text-5xl font-bold text-[var(--color-purple)]">10</span>
            <span className="mb-4 block text-sm text-[var(--color-body)]">
              Years Experience Working
            </span>
            <div className="flex items-center justify-center gap-2 text-[var(--color-body)]">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
