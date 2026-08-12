import { ABOUT_IMAGE, SOCIALS } from '../data'

/* div.site-section.bg-black.about-me — black (#000) two-column about:
   portrait left, right column with h3 "About Me" (white), two lorem
   paragraphs, and a row of 50px circular social buttons
   (bg rgba(255,255,255,.2), amber icons, hover bg #fff). */
export function About() {
  return (
    <section id="about" className="bg-black py-16 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <img
          src={ABOUT_IMAGE}
          alt="Portrait of the photographer"
          className="w-full rounded object-cover"
        />
        <div>
          <h3 className="font-display text-3xl font-bold text-white">About Me</h3>
          <p className="mt-4 leading-relaxed text-white/80">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 leading-relaxed text-white/80">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <ul className="mt-8 flex gap-3">
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-brand transition-colors hover:bg-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
