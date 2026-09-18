import { ButtonLink } from '@free-react-templates/ui'

interface FeaturedBannerProps {
  subtitle: string
  headline: string
  image: string
}

export function FeaturedBanner({ subtitle, headline, image }: FeaturedBannerProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal-800">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" loading="lazy" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-primary-300">{subtitle}</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{headline}</h2>
        <ButtonLink variant="primary" href="#products">
          Shop Now
        </ButtonLink>
      </div>
    </section>
  )
}
