export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-6">
              A great medical team to help your needs
            </h2>
            <p className="text-body leading-relaxed mb-6">
              We are committed to providing exceptional healthcare services with a team of
              experienced professionals. Our medical center offers comprehensive care across
              multiple specialties, ensuring you receive the best treatment tailored to your needs.
            </p>
            <p className="text-body leading-relaxed mb-8">
              With state-of-the-art facilities and a patient-first approach, we strive to make every
              visit comfortable and effective. Our dedicated staff works tirelessly to deliver
              compassionate care that makes a real difference in your health journey.
            </p>
            <a
              href="#about"
              className="inline-block border-2 border-brand-green text-dark-text font-semibold uppercase tracking-wider px-8 py-3 rounded hover:bg-brand-green hover:text-white transition-colors"
            >
              Read More
            </a>
          </div>
          <div className="lg:w-5/12">
            <img
              src="https://picsum.photos/seed/carepoint-about/600/400"
              alt="Medical team providing care"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
