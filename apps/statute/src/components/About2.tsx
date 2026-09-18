import { ButtonLink } from '@free-react-templates/ui'

export function About2() {
  return (
    <section id="about2" className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-800">
              We Are Here To Help You With Legal Solutions
            </h2>
            <p className="mb-6 leading-relaxed text-gray-500">
              Our attorneys have a proven track record of success in handling complex legal matters.
              We combine strategic thinking with aggressive advocacy to achieve the best possible
              outcomes for our clients.
            </p>
            <p className="mb-8 leading-relaxed text-gray-500">
              Whether you need assistance with criminal defense, family law, or business litigation,
              our team has the expertise and dedication to guide you through every step of the legal
              process.
            </p>
            <ButtonLink
              href="#contact"
              className="inline-block rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Contact Us
            </ButtonLink>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/seed/statute-about2/800/600"
              alt="Legal consultation meeting"
              className="w-full rounded object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
