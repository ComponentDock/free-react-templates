import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-light-bg py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/seed/statute-about/800/600"
              alt="Our legal team at work"
              className="w-full rounded object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-800">
              Dedicated to Give You the Best Legal Service
            </h2>
            <p className="mb-6 leading-relaxed text-gray-500">
              With over 25 years of experience in the legal industry, our team of dedicated
              attorneys has successfully represented thousands of clients. We understand that every
              case is unique, and we are committed to providing personalized legal strategies that
              deliver results.
            </p>
            <p className="mb-8 leading-relaxed text-gray-500">
              Our firm combines deep expertise with a client-first approach, ensuring that you
              receive the attention and representation you deserve at every step of the legal
              process.
            </p>
            <ButtonLink
              href="#contact"
              className="inline-block rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
