export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              &ldquo;Blessed is the one who takes refuge in him.&rdquo;
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              We are a community of believers dedicated to spreading the word of God and serving
              those in need. Our church has been a beacon of hope and faith for over two decades,
              welcoming people from all walks of life.
            </p>
            <p className="leading-relaxed text-gray-600">
              Through worship, fellowship, and community outreach, we strive to make a positive
              impact in our neighborhood and beyond. Join us for our weekly services and discover a
              place where you belong.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/creed-about/600/400"
              alt="Church community gathering"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
