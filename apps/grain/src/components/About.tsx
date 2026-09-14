export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/grain-about/700/500"
              alt="Interior design workspace"
              className="w-full rounded object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">About Grain</h2>
            <p className="mb-6 text-gray-600">
              Grain is an interior design studio dedicated to transforming spaces into beautiful,
              functional environments. With years of experience in residential and commercial
              design, we bring creativity and precision to every project.
            </p>
            <p className="mb-8 text-gray-600">
              Our team of talented designers works closely with clients to understand their vision
              and deliver results that exceed expectations. From concept to completion, we handle
              every detail with care.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-brand">120+</div>
                <div className="mt-1 text-sm text-gray-500">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">50+</div>
                <div className="mt-1 text-sm text-gray-500">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">15+</div>
                <div className="mt-1 text-sm text-gray-500">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
