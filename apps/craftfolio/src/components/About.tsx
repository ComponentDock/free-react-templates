export default function About() {
  return (
    <section id="about" className="py-30 bg-bg-gray">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-5/12">
          <img
            src="https://picsum.photos/seed/craftfolio-about/500/600"
            alt="About me"
            className="w-full rounded-lg object-cover"
          />
        </div>
        {/* Text */}
        <div className="w-full md:w-6/12">
          <h2 className="font-heading text-4xl font-bold text-text-primary mb-6">About Myself</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            Inappropriate behavior is often laughed off as &ldquo;boys will be boys,&rdquo; women
            face higher conduct standards especially in the workplace. That&apos;s why it&apos;s
            crucial that, as women, our behavior on the job is beyond reproach. Inappropriate
            behavior is often laughed off as &ldquo;boys will be boys,&rdquo; women face higher.
          </p>
          <p className="text-text-secondary mb-8 leading-relaxed">
            That&apos;s why it&apos;s crucial that, as women, our behavior on the job is beyond
            reproach. Inappropriate behavior is often laughed.
          </p>
          <a
            href="#contact"
            className="inline-block border-2 border-brand text-text-primary font-body text-base font-medium px-8 py-3 rounded-full hover:bg-brand hover:text-white transition-colors"
          >
            More Info
          </a>
        </div>
      </div>
    </section>
  )
}
