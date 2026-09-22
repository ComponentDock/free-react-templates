import { ButtonLink } from '@free-react-templates/ui'

export function Offer() {
  return (
    <section
      id="offer"
      aria-label="Special offer"
      className="relative overflow-hidden bg-ink py-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/gymbox-offer/1920/600)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-display text-6xl font-bold text-primary-400 sm:text-7xl">50% Off</p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
          A Big Offer for This Summer
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-300">
          Get access to our premium gym facilities and expert trainers at half price. This
          limited-time summer offer includes full gym access, group classes, and a personalized
          fitness plan.
        </p>
        <ButtonLink
          href="#contact"
          className="boxed-btn3 mt-8 inline-flex px-10 py-3 text-xl text-white"
        >
          Join Now
        </ButtonLink>
      </div>
    </section>
  )
}
