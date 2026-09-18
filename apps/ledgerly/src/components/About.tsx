import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section className="bg-white py-20 dark:bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/ledgerly-about/600/400"
            alt="About Ledgerly"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-light text-heading dark:text-white">
            Let's change <br />
            <span className="font-semibold text-gold-500">the world</span> together
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            We believe in a future where financial freedom is accessible to everyone. Our platform
            provides the tools and knowledge needed to navigate the cryptocurrency landscape with
            confidence.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            From beginner-friendly guides to advanced trading tools, Ledgerly is your trusted
            partner in the digital currency revolution.
          </p>
          <ButtonLink href="#" className="mt-8 inline-block">
            Read More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
