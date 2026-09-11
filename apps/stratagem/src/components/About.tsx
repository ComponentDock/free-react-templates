import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-light text-navy md:text-4xl">Why our Consulting?</h2>
            <p className="mt-6 leading-relaxed text-mist">
              With years of experience in the industry, our team of expert consultants delivers
              tailored strategies that drive real results. We understand the unique challenges
              businesses face and provide actionable solutions that transform operations and
              accelerate growth.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              From startup ventures to established enterprises, we partner with organizations across
              industries to unlock their full potential through data-driven insights and proven
              methodologies.
            </p>
            <ButtonLink
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full border border-brand px-8 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
            >
              About Us
            </ButtonLink>
          </div>

          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/stratagem-about/500/400"
              alt="Consulting team collaboration"
              className="w-full max-w-md rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
