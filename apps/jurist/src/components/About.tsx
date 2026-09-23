export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div>
          <img
            src="https://picsum.photos/seed/jurist-about/600/400"
            alt="Law office"
            className="w-full rounded object-cover"
          />
        </div>
        <div className="px-4">
          <p className="mb-4 text-gray-600 first-letter:text-5xl first-letter:font-bold first-letter:text-brand first-letter:float-left first-letter:mr-2 first-letter:leading-none">
            We are a dedicated team of legal professionals with decades of combined experience. Our
            firm has successfully represented clients across a wide range of practice areas, from
            corporate law to criminal defense.
          </p>
          <p className="text-gray-600">
            We believe in transparent communication, aggressive representation, and a commitment to
            achieving the best possible outcomes for our clients. Every case receives our full
            attention and resources.
          </p>
        </div>
        <div className="px-4">
          <p className="mb-4 text-gray-600">
            Our team of expert lawyers brings extensive knowledge and courtroom experience to every
            case. We stay current with legal developments and leverage modern strategies to serve
            our clients effectively.
          </p>
          <p className="text-gray-600">
            From initial consultation to final resolution, we guide you through every step of the
            legal process with clarity and confidence.
          </p>
        </div>
      </div>
    </section>
  )
}
