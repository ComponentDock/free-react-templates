const logos = [
  'Brand Alpha',
  'Brand Beta',
  'Brand Gamma',
  'Brand Delta',
  'Brand Epsilon',
  'Brand Zeta',
]

export function Brands() {
  return (
    <section className="bg-brand py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
            You'll be in good company.
          </h2>
          <p className="text-white/80 font-body text-lg mb-6">
            A powerful suite of features to help you build fast and functional layouts. Spruce is
            perfect for building websites of almost any kind.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-white text-white font-semibold px-6 py-2.5 rounded text-sm hover:bg-white hover:text-brand transition-colors"
          >
            Meet Our Customers
          </a>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
          {logos.map((name) => (
            <div
              key={name}
              className="bg-white/20 rounded px-8 py-4 text-white/90 font-heading font-semibold text-lg"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
