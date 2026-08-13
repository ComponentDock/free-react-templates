import { ButtonLink } from '@free-react-templates/ui'
import { featuredSection } from '../data'

export function FeaturedSection() {
  return (
    <section
      aria-label="Thanks to all donors"
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/generous-teal-bg/1600/900')" }}
    >
      <div className="bg-primary/90">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
          <div>
            <img
              src={featuredSection.photo}
              alt={featuredSection.alt}
              className="w-full rounded object-cover"
            />
          </div>
          <div className="md:pl-5">
            <h2 className="text-2xl font-black text-white md:text-3xl">{featuredSection.title}</h2>
            <p className="mt-4 font-light text-white/90">{featuredSection.text}</p>
            <p className="mt-4 text-lg font-bold text-white">{featuredSection.raised}</p>
            <div className="mt-6">
              <ButtonLink
                href="#about"
                className="rounded bg-primary text-base text-ink hover:bg-primary-700"
              >
                Read The Full Story
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
