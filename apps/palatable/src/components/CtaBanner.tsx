export function CtaBanner() {
  return (
    <section className="relative py-32 overflow-hidden" aria-label="Call to action">
      <img
        src="https://picsum.photos/seed/palatable-cta/1920/600"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gluten Free Recipes</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
        </p>
        <a
          href="#"
          className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-colors"
        >
          Discover All The Recipes
        </a>
      </div>
    </section>
  )
}
