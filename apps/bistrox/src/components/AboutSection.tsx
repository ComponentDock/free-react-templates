export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://picsum.photos/seed/bistrox-about/600/400"
              alt="About Bistrox"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-2">
              About Bistrox
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 font-heading">
              Our chef cooks the most delicious food for you
            </h2>
            <p className="text-text-muted mb-4 leading-relaxed">
              We are passionate about creating unforgettable dining experiences. Our team of
              talented chefs uses only the freshest ingredients to prepare dishes that delight the
              senses and warm the soul.
            </p>
            <p className="text-text-muted leading-relaxed">
              From classic recipes to innovative creations, every meal at Bistrox is crafted with
              love and attention to detail. Come join us and taste the difference that passion
              makes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
