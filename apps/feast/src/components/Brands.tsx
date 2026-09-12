const brands = [
  { alt: 'Brand 1', seed: 'feast-brand-1' },
  { alt: 'Brand 2', seed: 'feast-brand-2' },
  { alt: 'Brand 3', seed: 'feast-brand-3' },
  { alt: 'Brand 4', seed: 'feast-brand-4' },
  { alt: 'Brand 5', seed: 'feast-brand-5' },
  { alt: 'Brand 6', seed: 'feast-brand-6' },
  { alt: 'Brand 7', seed: 'feast-brand-7' },
  { alt: 'Brand 8', seed: 'feast-brand-8' },
] as const

export function Brands() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Brands love to take Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Trusted by leading companies across industries. We've partnered with hundreds of brands
            to deliver exceptional catering experiences.
          </p>
        </div>

        {/* Brand logos grid */}
        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand.seed} className="flex items-center justify-center">
              <img
                src={`https://picsum.photos/seed/${brand.seed}/120/60`}
                alt={brand.alt}
                className="h-12 w-auto object-contain opacity-60 grayscale transition-opacity hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
