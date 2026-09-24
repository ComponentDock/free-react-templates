export function AboutUs() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">About Us</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We are dedicated to providing exceptional financial services that empower individuals
            and businesses to achieve their goals.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center">
            <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-brand/20">
              <img
                src="https://picsum.photos/seed/banknote-about2/400/400"
                alt="About Us"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">We Solve Your Financial Problem</h3>
            <p className="mb-4 text-gray-600">
              With over a decade of experience in the financial industry, our team of experts is
              committed to delivering personalized solutions that fit your unique needs.
            </p>
            <p className="text-gray-600">
              From personal banking to corporate finance, we offer a full spectrum of services
              designed to help you navigate the complex world of finance with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
