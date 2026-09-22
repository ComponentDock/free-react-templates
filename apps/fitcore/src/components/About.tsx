import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <img
            src="https://picsum.photos/seed/fitcore-about/600/500"
            alt="Inside the gym"
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="md:pl-12">
          <span className="mb-4 inline-block border-l-2 border-brand pl-6 font-display text-2xl font-light uppercase tracking-wider text-brand">
            About Our Gym
          </span>
          <h2 className="mb-6 font-display text-4xl font-bold uppercase text-ink md:text-5xl">
            Safe Body Building Proper Solutions That Save Your Valuable Time
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted">
            We provide expert-guided fitness programs designed to help you achieve your goals
            efficiently. Our state-of-the-art equipment and experienced trainers ensure every
            session counts toward your transformation.
          </p>
          <p className="mb-10 text-base leading-relaxed text-muted">
            From personalized training plans to group classes, we offer flexible options that fit
            your schedule and lifestyle. Your fitness journey deserves the best support.
          </p>
          <ButtonLink
            href="#contact"
            className="bg-brand px-8 py-3 font-display text-sm font-light uppercase tracking-widest text-white hover:bg-brand-dark"
          >
            Become a Member
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
