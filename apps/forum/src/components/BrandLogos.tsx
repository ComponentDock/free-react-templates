const logos = [
  { seed: 'forum-brand-1', alt: 'Brand 1' },
  { seed: 'forum-brand-2', alt: 'Brand 2' },
  { seed: 'forum-brand-3', alt: 'Brand 3' },
  { seed: 'forum-brand-4', alt: 'Brand 4' },
  { seed: 'forum-brand-5', alt: 'Brand 5' },
]

export interface BrandLogosProps {
  className?: string
}

export function BrandLogos({ className }: BrandLogosProps) {
  return (
    <section className={`bg-white py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {logos.map((logo) => (
            <img
              key={logo.seed}
              src={`https://picsum.photos/seed/${logo.seed}/120/60`}
              alt={logo.alt}
              className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
