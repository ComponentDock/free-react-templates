import { ButtonLink } from '@free-react-templates/ui'

/** Photo CTA band with a dark overlay, headline and lime button (the source
    .ftco-intro section). */
export function CtaBand() {
  return (
    <section
      className="relative bg-cover bg-center py-24 [background-attachment:fixed]"
      style={{ backgroundImage: "url('https://picsum.photos/id/1015/1920/1080')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-normal text-white md:text-4xl">
            We Provide Free Dental Care Consultation
          </h2>
          <p className="mt-3 text-white/80">
            Your Health is Our Top Priority with Comprehensive, Affordable medical.
          </p>
        </div>
        <ButtonLink
          href="#contact"
          className="h-auto shrink-0 rounded bg-lime px-8 py-3 text-base text-white hover:bg-lime-hover"
        >
          Free Consultation
        </ButtonLink>
      </div>
    </section>
  )
}
