export function About() {
  return (
    <section id="about" className="bg-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/givingheart-about/800/600"
              alt="About GivingHeart"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              A very Lovely Welcome to our Company
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We are a dedicated nonprofit organization committed to making the world a better
              place. Through our various programs and initiatives, we provide support to communities
              in need, focusing on education, healthcare, and sustainable development. Join us in
              our mission to create lasting positive change.
            </p>
            <a
              href="#donate"
              className="inline-block rounded-[25px] bg-gradient-to-r from-[#f40f68] via-[#f86e3d] to-[#fbcd11] px-8 py-3 text-sm font-bold text-white uppercase tracking-wider transition opacity-90 hover:opacity-100"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
