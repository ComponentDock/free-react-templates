export function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mb-4 text-gray-500">
              We are a leading real estate agency dedicated to helping you find the perfect
              property. With years of experience in the market, our team of professionals is
              committed to providing exceptional service.
            </p>
            <p className="text-gray-500">
              Whether you are buying, selling, or investing, we have the expertise and resources to
              guide you every step of the way. Your dream property is just a call away.
            </p>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/propstack-about/600/400"
              alt="About Propstack"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
