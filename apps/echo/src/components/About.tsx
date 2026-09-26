import { TwitterIcon, FacebookIcon, InstagramIcon } from './SocialIcons'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Author image */}
          <div className="md:w-1/3">
            <div
              className="aspect-[3/4] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://picsum.photos/seed/echo-about/600/800')`,
              }}
              role="img"
              aria-label="Author photo"
            />
          </div>

          {/* Bio */}
          <div className="md:w-1/2">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-mist">
              About
            </h2>
            <h3 className="mb-6 text-3xl font-bold text-ink">Hi! I&apos;m Echo</h3>
            <p className="mb-6 leading-relaxed text-mist">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in.
            </p>
            <a
              href="#resume"
              className="inline-block border-b-2 border-brand pb-1 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:text-brand"
            >
              Checkout my resume
            </a>

            {/* Social links */}
            <ul className="mt-6 flex gap-4">
              <li>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-mist transition-colors hover:text-brand"
                >
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-mist transition-colors hover:text-brand"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-mist transition-colors hover:text-brand"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>

            {/* Contact */}
            <div className="mt-8">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">
                Contact me here!
              </h4>
              <p className="text-mist">
                Email:{' '}
                <a href="mailto:echo@email.com" className="text-brand hover:underline">
                  echo@email.com
                </a>
              </p>
              <p className="text-mist">
                Phone:{' '}
                <a href="tel:+123456789" className="text-brand hover:underline">
                  (123)-456-789
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
