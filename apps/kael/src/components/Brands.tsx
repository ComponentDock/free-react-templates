import { Phone } from 'lucide-react'

const BRANDS = [
  { name: 'Brand 1', seed: 'kael-b1' },
  { name: 'Brand 2', seed: 'kael-b2' },
  { name: 'Brand 3', seed: 'kael-b3' },
  { name: 'Brand 4', seed: 'kael-b4' },
  { name: 'Brand 5', seed: 'kael-b5' },
  { name: 'Brand 6', seed: 'kael-b6' },
]

export function Brands() {
  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          {/* Brand logos grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 lg:grid-cols-6">
              {BRANDS.map((brand) => (
                <div key={brand.seed} className="flex items-center justify-center">
                  <img
                    src={`https://picsum.photos/seed/${brand.seed}/120/60`}
                    alt={brand.name}
                    className="h-10 w-auto object-contain opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0"
                    width={120}
                    height={60}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Experience counter + phone */}
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl font-bold text-primary-500">10</span>
              <span className="text-sm font-medium uppercase text-smoke">
                Years Experience Working
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-400 text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase text-smoke">Call us now</p>
                <p className="font-display text-lg font-bold text-ink">(+1)-800-555-6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
