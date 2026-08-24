export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://picsum.photos/seed/spruce-testi/600/500"
            alt="Testimonial"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4 leading-tight">
            They use Spruce to create great websites.
          </h2>
          <p className="text-body font-body text-lg mb-10">
            A powerful suite of features to help you build fast and functional layouts.
          </p>
          <div className="bg-mist rounded-lg p-8 border-l-4 border-brand">
            <p className="text-body font-body italic leading-relaxed mb-6">
              "Our platform seamlessly integrates with all major content management systems, making
              it easy to manage and update your content. Spruce is perfect for building websites of
              almost any kind."
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/spruce-founder/80/80"
                alt="Bob Frapples"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <span className="font-heading font-semibold text-navy block">Bob Frapples</span>
                <span className="text-muted font-body text-sm">CEO at TechCorp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
