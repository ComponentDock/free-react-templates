import { Button } from '@free-react-templates/ui'

export function ConsultationCta() {
  return (
    <section id="contact" className="bg-ink py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Request Free Consultation
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-base text-gray-400">
          Get expert legal advice from our experienced attorneys. Schedule your free consultation
          today and take the first step toward resolving your legal matters.
        </p>
        <Button className="mt-8 inline-flex rounded-lg bg-brand px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-brand-dark">
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  )
}
