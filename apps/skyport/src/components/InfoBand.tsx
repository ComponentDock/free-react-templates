import { ButtonLink } from '@free-react-templates/ui'

/**
 * The dark photo band: a cover image anchored right under a full-bleed
 * `rgba(0,0,0,.5)` overlay, with white copy in a narrow left column and a white
 * pill CTA that inverts to an outlined pill on hover.
 */
export function InfoBand() {
  return (
    <section className="relative bg-cover bg-right bg-no-repeat py-[120px]">
      <img
        src="https://picsum.photos/seed/skyport-band/1920/900"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-overlay" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1140px] px-5">
        <div className="lg:w-5/12">
          <h1 className="font-heading text-[36px] leading-[1.2em] font-semibold text-white">
            Engineers Who Have Kept Busy Systems Online
          </h1>
          <p className="py-[20px] text-white">
            Our reliability engineers have kept payment systems, streaming platforms and public
            services online through their busiest days. Bring us the project everyone else called
            impossible.
          </p>
          <ButtonLink
            href="#contact"
            className="inline-flex h-[42px] items-center rounded-[25px] border border-transparent bg-surface px-[30px] text-[12px] font-medium text-ink uppercase transition-colors hover:border-white hover:bg-transparent hover:text-white"
          >
            Get Customer Support
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
