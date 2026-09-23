export function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/byteops-about/600/500"
              alt="Our team at work"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-ops-400">
              Welcome to ByteOps
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">We Are Digital Agency</h2>
            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                We are a team of passionate designers, developers, and strategists dedicated to
                creating exceptional digital experiences. Our approach combines creativity with
                technology to deliver results that matter.
              </p>
              <p>
                From initial strategy to final launch, we work closely with our clients to ensure
                every project exceeds expectations and drives meaningful business outcomes.
              </p>
            </div>
            <div className="mt-8 inline-block rounded bg-ops-400 px-6 py-4 text-white">
              <span className="block text-3xl font-bold">20</span>
              <span className="text-sm">Years of experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
