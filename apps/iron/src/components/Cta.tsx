import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden bg-ink py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/iron-cta/1920/600)' }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Huge Transaction in last Week
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-300">
          Join thousands of members who have already transformed their lives. Start your fitness
          journey today and experience the difference that expert guidance and state-of-the-art
          facilities can make.
        </p>
        <ButtonLink
          href="#pricing"
          className="mt-8 inline-flex rounded bg-primary-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Become a Member
        </ButtonLink>
      </div>
    </section>
  )
}
