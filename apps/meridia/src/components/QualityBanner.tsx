import { cn } from '@free-react-templates/ui'

interface QualityBannerProps {
  className?: string
}

export function QualityBanner({ className }: QualityBannerProps) {
  return (
    <section
      className={cn('relative flex min-h-[350px] items-center', className)}
      aria-labelledby="quality-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/unioncorp-quality/1920/600)' }}
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-lg">
          <span className="mb-2 block text-sm font-semibold uppercase text-accent-400">
            About Union Corporation
          </span>
          <h2 id="quality-heading" className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Quality Makes the Belief for Customers
          </h2>
          <p className="mb-4 text-sm text-white/80">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm font-semibold text-white hover:text-accent-400 transition-colors"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
              ▶
            </span>
            Watch Video
          </a>
        </div>
      </div>
    </section>
  )
}
