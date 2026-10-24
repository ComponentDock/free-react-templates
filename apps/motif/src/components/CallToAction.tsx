import { ButtonLink } from '@free-react-templates/ui'

export function CallToAction() {
  return (
    <section
      id="contact"
      aria-label="Call to action"
      className="relative overflow-hidden bg-primary-500 py-20 sm:py-28"
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/mosh-cta/1600/700')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-100">
          Give us a shout
        </p>
        <h2 className="mt-2 font-display text-3xl font-black text-white sm:text-4xl">
          Are you Ready to have a Talk?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-100">
          Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus
          blandit.
        </p>
        <div className="mt-9">
          <ButtonLink
            href="#home"
            className="rounded-full bg-white px-10 py-3.5 text-primary-500 hover:bg-primary-50"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
