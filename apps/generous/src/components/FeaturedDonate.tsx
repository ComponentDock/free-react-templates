import { ButtonLink } from '@free-react-templates/ui'
import { featuredDonate } from '../data'

export function FeaturedDonate() {
  return (
    <section
      id="donate"
      aria-label="Featured donation"
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/generous-donate-bg/1600/900')" }}
    >
      <div className="bg-success/90">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-4 md:pr-5">
            <span className="text-sm uppercase tracking-widest text-white/80">
              {featuredDonate.meta}
            </span>
            <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
              {featuredDonate.title}
            </h3>
            <p className="mt-4 font-light text-white/90">{featuredDonate.text}</p>
            <p className="mt-4 text-sm text-white/80">{featuredDonate.lastDonation}</p>
            <div className="mt-4 h-[0.2rem] w-full bg-white">
              <div className="h-full bg-warning" style={{ width: '27%' }} />
            </div>
            <p className="mt-3 text-sm font-medium text-white">{featuredDonate.caption}</p>
            <div className="mt-6">
              <ButtonLink
                href="#donate"
                className="rounded bg-primary px-6 py-3 text-base text-ink hover:bg-primary-700"
              >
                Donate Now
              </ButtonLink>
            </div>
          </div>
          <div className="md:col-span-8 md:order-2">
            <img
              src={featuredDonate.photo}
              alt={featuredDonate.alt}
              className="w-full rounded object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
