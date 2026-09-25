import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-void py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/groove-about/560/640"
            alt="Artist performing live on stage"
            className="h-auto w-full max-w-md rounded-lg shadow-2xl"
            loading="lazy"
          />
        </div>

        <div>
          <span className="font-script text-xl text-accent-400">About us</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">The electro vibe</h2>
          <p className="mt-6 leading-relaxed text-white/70">
            Born from the underground music scene, Groove Sessions brings together the finest
            electronic beats and live performances. Our artists craft sonic experiences that
            transcend genres, blending deep house, techno, and ambient soundscapes into
            unforgettable live shows.
          </p>
          <p className="mt-4 leading-relaxed text-white/70">
            From sold-out arena tours to intimate club sets, every performance is a journey through
            sound and emotion. Discover the artists, explore the discography, and join the movement.
          </p>
          <ButtonLink
            href="#contact"
            className="mt-8 inline-block rounded-full bg-primary-400 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-400"
          >
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
