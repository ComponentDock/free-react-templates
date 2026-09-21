/* Inline brand SVG icon (lucide-react dropped brand icons) */

const photos = [
  { seed: 'crumbs-ig1' },
  { seed: 'crumbs-ig2' },
  { seed: 'crumbs-ig3' },
  { seed: 'crumbs-ig4' },
  { seed: 'crumbs-ig5' },
  { seed: 'crumbs-ig6' },
]

export function InstagramFeed() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="font-dm-sans text-sm uppercase tracking-[0.2em] text-orange-600">
            Follow Us
          </span>
          <h2 className="mt-3 font-quicksand text-3xl font-bold text-gray-900 md:text-4xl">
            Instagram Feed
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {photos.map((p) => (
            <div key={p.seed} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${p.seed}/300/300`}
                alt="Instagram cake photo"
                className="h-40 w-full object-cover transition-transform group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-orange-600/0 opacity-0 transition-all group-hover:bg-orange-600/30 group-hover:opacity-100">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
