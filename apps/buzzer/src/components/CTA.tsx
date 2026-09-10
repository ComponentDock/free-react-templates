import { ButtonLink } from '@free-react-templates/ui'

export function CTA() {
  return (
    <section
      id="contact"
      className="relative py-20 dark:bg-gray-900"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/buzzer-cta-bg/1920/600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-ink/85 dark:bg-ink-dark/90" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          Get started with our awesome service today
        </h2>
        <p className="mt-5 text-lg text-lavender">
          Let us help you transform your business with cutting-edge technology and strategic
          consulting that delivers real results.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Get Started Now
        </ButtonLink>
      </div>
    </section>
  )
}
