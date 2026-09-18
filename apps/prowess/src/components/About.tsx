import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <img
            src="https://picsum.photos/seed/prowess-about/700/700"
            alt="Personal trainer guiding a client during a workout"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Discover
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.1em] text-heading dark:text-white sm:text-4xl">
            About Prowess
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-body dark:text-gray-400">
            We believe fitness is more than just physical — it's a lifestyle. Our expert trainers
            and modern facilities are designed to help you become the best version of yourself.
            Whether you're a beginner or a seasoned athlete, Prowess has the tools and community to
            support your journey.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-body dark:text-gray-400">
            From strength training to yoga, our programs are crafted to challenge your body and
            mind. Join us and experience the difference that dedicated coaching and a supportive
            environment can make.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#programs"
              className="rounded-full bg-brand px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-brand"
            >
              Train Hard
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
