export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://picsum.photos/seed/alleluia-about/600/400"
              alt="Church community"
              className="w-full rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="font-oldstandard text-4xl font-bold text-text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We are a vibrant community of believers gathered to worship, learn, and serve
              together. Our church has been a beacon of faith and hope for over two decades,
              welcoming people from all walks of life.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Whether you are seeking spiritual growth, meaningful connections, or a place to
              belong, you will find a warm welcome here. Come as you are and discover the joy of
              faith community.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
