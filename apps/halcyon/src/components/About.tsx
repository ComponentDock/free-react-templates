import { SocialLinks } from './SocialLinks'

export function About() {
  return (
    <section id="about" className="bg-paper py-24 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Halcyon Spa &amp; Wellness
          </h2>
          <p className="mt-6 text-lg font-bold text-ink dark:text-white">
            A retreat from the everyday, right in the heart of the city.
          </p>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            Treatments crafted around your rhythm — warm stone therapy, gentle massage and botanical
            rituals that leave you lighter.
          </p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
        <div className="flex items-start">
          <img
            src="https://picsum.photos/seed/halcyon-about-1/600/400"
            alt="Spa treatment room"
            className="h-80 w-3/5 rounded-lg object-cover shadow-lg"
          />
          <img
            src="https://picsum.photos/seed/halcyon-about-2/600/400"
            alt="Massage session"
            className="mt-10 -ml-10 h-80 w-3/5 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
