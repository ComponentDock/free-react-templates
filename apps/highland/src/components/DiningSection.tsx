export function DiningSection() {
  return (
    <section data-testid="dining-section" className="py-20 bg-white" id="dining">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://picsum.photos/seed/highland-dining-1/500/600"
              alt="Restaurant"
              className="w-full rounded shadow-lg"
            />
            <img
              src="https://picsum.photos/seed/highland-dining-2/400/500"
              alt="Food"
              className="absolute -bottom-8 -right-8 w-2/3 rounded shadow-lg"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-brand text-sm font-normal uppercase tracking-widest">
              Delicious Food
            </span>
            <h2 className="text-heading text-4xl lg:text-5xl font-normal mt-3 mb-6 leading-tight">
              We Serve Fresh and Delicious Food
            </h2>
            <p className="text-body leading-relaxed mb-6">
              Our expert chefs craft each dish with the finest locally-sourced ingredients, creating
              a culinary experience that delights every palate. From hearty breakfasts to elegant
              dinners, every meal is a celebration of flavor.
            </p>
            <a
              href="#dining"
              className="inline-block text-muted font-medium hover:text-brand transition-colors border-b border-muted hover:border-brand pb-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
