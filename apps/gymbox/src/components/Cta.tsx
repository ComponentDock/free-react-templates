import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden bg-ink py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/gymbox-cta/1920/600)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          A Big Offer for This Summer
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-300">
          Join thousands of members who have already transformed their lives. Start your fitness
          journey today and experience the difference that expert guidance and state-of-the-art
          facilities can make.
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
