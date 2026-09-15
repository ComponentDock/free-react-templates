export function SuccessStories() {
  return (
    <section id="about" className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Image side */}
        <div className="relative h-80 md:h-auto">
          <img
            src="https://picsum.photos/seed/success-story/800/600"
            alt="Success story"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text side */}
        <div className="flex items-center bg-light px-8 py-16 md:px-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">Success Stories</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Over the years, our charity has helped thousands of children gain access to food,
              education, and healthcare. Every donation creates a ripple effect that extends far
              beyond the initial gift, touching lives and building stronger communities.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              From building schools in remote villages to providing life-saving medical care, our
              success stories are a testament to the power of collective generosity and unwavering
              commitment.
            </p>
            <a
              href="#"
              className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white uppercase tracking-wider transition hover:bg-primary-600"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
