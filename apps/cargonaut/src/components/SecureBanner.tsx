import { PhoneCall } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { brand } from '../data'

const bannerImage = 'https://picsum.photos/seed/cargonaut-banner/1600/700'

export function SecureBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={bannerImage}
        alt="Forklift loading a container"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-navy/70" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-32 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-normal text-white sm:text-[46px] sm:leading-[52px]">
            100% secure and safe
          </h2>
          <p className="mt-4 text-white/80">
            Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture
            placing drawing.
          </p>
        </div>
        <ButtonLink
          href={`tel:${brand.quotePhone.replace(/\s/g, '')}`}
          className="rounded-none bg-brand px-9 py-4 text-base font-medium text-white hover:bg-white hover:text-brand"
        >
          <PhoneCall className="h-5 w-5" aria-hidden="true" />
          {brand.quotePhone}
        </ButtonLink>
      </div>
    </section>
  )
}
