export function QuoteNewsletterAd() {
  return (
    <section className="py-20" aria-label="Quote, newsletter and advertisement">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {/* Quote */}
          <div className="text-center px-4">
            <span className="text-6xl text-brand leading-none">&ldquo;</span>
            <h4 className="text-lg font-semibold text-ink mt-2 mb-3 leading-relaxed">
              Nothing is better than going home to family and eating good food and relaxing
            </h4>
            <p className="text-sm text-body font-semibold">John Smith</p>
            <div className="flex justify-between items-center mt-4 text-xs text-body max-w-xs mx-auto">
              <span>January 04, 2018</span>
              <span>2 Comments</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-ink mb-4 text-center">
              Subscribe to our newsletter
            </h4>
            <div className="relative overflow-hidden rounded">
              <img
                src="https://picsum.photos/seed/palatable-newsletter/600/400"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-overlay" />
              <div className="relative z-10 p-6">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder="Subscribe to newsletter"
                    className="w-full px-4 py-3 bg-white/90 text-ink text-sm placeholder:text-body focus:outline-none focus:ring-2 focus:ring-brand"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="w-full bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 text-sm uppercase tracking-wider transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-white/70 text-xs mt-4 leading-relaxed">
                  Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie.
                </p>
              </div>
            </div>
          </div>

          {/* Ad */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/palatable-ad/400/300"
              alt="Promotional advertisement"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
