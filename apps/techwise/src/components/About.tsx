import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/techwise-about/700/700"
            alt="Techwise creative studio team collaborating"
            className="w-full rounded object-cover shadow-xl"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            About Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-dark-bg sm:text-4xl">
            We Are Techwise Creative Studio Agency
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist">
            We are passionate about creating digital experiences that inspire and engage. Our team
            of designers, developers, and strategists work together to deliver solutions that drive
            real business results.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            With years of experience in the industry, we have helped numerous businesses transform
            their digital presence and achieve their goals.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <span className="text-3xl font-bold text-brand">150+</span>
              <p className="mt-1 text-sm text-mist">Expert Team</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-brand">200+</span>
              <p className="mt-1 text-sm text-mist">Solution For Business</p>
            </div>
          </div>

          <div className="mt-8">
            <ButtonLink
              href="#contact"
              className="rounded bg-brand px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand/80"
            >
              Get in touch with us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
