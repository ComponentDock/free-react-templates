import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/bloom-about/700/700"
            alt="Spa towels and beauty products"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Welcome to Bloom
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase text-ink dark:text-white sm:text-4xl">
            Skin &amp; Beauty Care
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            Our therapists combine proven treatments with a calming atmosphere, so every visit
            leaves your skin glowing and your mind at ease.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#appointment"
              className="rounded-full bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
            >
              Make an Appointment
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
