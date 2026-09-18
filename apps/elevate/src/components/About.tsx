import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/elevate-about/800/600"
              alt="Coaching session"
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-ink dark:text-white">About Our Coaching</h2>
            <p className="mt-6 leading-relaxed text-ink-light dark:text-gray-400">
              We help professionals and entrepreneurs reach their full potential through
              personalized coaching programs. Our experienced coaches bring years of expertise to
              guide you on your journey to success.
            </p>
            <p className="mt-4 leading-relaxed text-ink-light dark:text-gray-400">
              Whether you are looking to improve your leadership skills, grow your business, or find
              better work-life balance, we have a plan that fits your needs.
            </p>
            <ButtonLink
              href="#services"
              className="mt-8 inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
