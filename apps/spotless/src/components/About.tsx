export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <img
          src="https://picsum.photos/seed/spotless-cleaner/600/520"
          alt="Professional cleaner giving a thumbs up"
          className="w-full rounded-2xl object-cover shadow-lg"
        />
        <div>
          <p className="font-accent text-base font-semibold uppercase tracking-[4px] text-brand">
            About cleaning company
          </p>
          <h2 className="mt-4 text-4xl font-medium text-heading">Better life for everyone</h2>
          <p className="mt-6 leading-relaxed text-body">
            At Spotless, it is our duty to provide quality home services with a smile. Every member
            of our team is professionally trained, fully equipped, and committed to leaving your
            home or office spotless — so you can spend your time on the things that really matter.
          </p>
          <a href="#services" className="btn-pill mt-8">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
