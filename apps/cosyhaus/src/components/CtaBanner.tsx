import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(22,22,26,0.90), rgba(22,22,26,0.90)), url(https://picsum.photos/seed/cosyhaus-cta/1600/400)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
            Are you Searching For a
            <br />
            First-Class Consultant?
          </h2>
          <ButtonLink
            href="#contact"
            className="shrink-0 rounded-lg bg-white px-8 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gray-100"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
