import { ButtonLink } from '@free-react-templates/ui'

/**
 * The "Commitment to security" split band: an own illustration beside a caption
 * with a coral outline pill CTA. Stacks with the illustration first below `md`.
 */
export function Commitment() {
  return (
    <section
      id="security"
      aria-label="Commitment to security"
      className="bg-surface px-5 py-24 md:py-[100px]"
    >
      <div className="mx-auto grid max-w-[1140px] items-center gap-12 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/presto-security/960/640"
          alt="An engineer reviewing the hosting dashboard in a server room"
          width={960}
          height={640}
          loading="lazy"
          className="w-full rounded-lg object-cover"
        />

        <div className="lg:pl-[50px]">
          <h2 className="font-heading text-[31px] font-semibold text-ink md:text-[35px]">
            Commitment to security
          </h2>
          <p className="mt-5 mb-10 text-base leading-[1.8] text-copy">
            Access is gated by two-factor sign-in, every account is isolated on its own container
            and each release is scanned before it reaches a production host. Certificates renew
            themselves, so nothing lapses quietly at the weekend.
          </p>
          <ButtonLink
            href="#contact"
            variant="outline"
            className="rounded-full border-coral px-12 py-3.5 text-coral transition-colors hover:bg-coral hover:text-white"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
