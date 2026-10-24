import { ButtonLink } from '@free-react-templates/ui'

const bandImage = 'https://picsum.photos/seed/amberline-intro/1920/600'

export function IntroCta() {
  return (
    <section className="relative overflow-hidden bg-cover bg-top bg-fixed py-12">
      <img
        src={bandImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[-50px] w-full bg-brand/90 lg:w-1/2 lg:[transform:skewX(20deg)]"
      />
      <div className="relative mx-auto max-w-[1320px] px-4">
        <p className="text-[16px] text-ink/80">Contact us for construction &amp; renovation work</p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-[34rem] text-[32px] font-normal text-ink lg:text-[40px]">
            We Build Great Structures
          </h2>
          <ButtonLink
            href="#contact"
            className="h-[68px] rounded-none border border-transparent bg-ink px-12 text-[12px] font-bold uppercase tracking-[1px] text-white hover:border-ink hover:bg-transparent hover:text-ink lg:bg-brand lg:text-ink lg:hover:border-ink lg:hover:text-ink"
          >
            Make an appointment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
