const logos = [
  { name: 'Acme Corp', seed: 'logo-acme' },
  { name: 'GlobalTech', seed: 'logo-global' },
  { name: 'Nexus', seed: 'logo-nexus' },
  { name: 'Pioneer', seed: 'logo-pioneer' },
  { name: 'Horizon', seed: 'logo-horizon' },
] as const

export function BrandLogos() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={`https://picsum.photos/seed/${logo.seed}/120/40`}
              alt={logo.name}
              className="h-8 object-contain grayscale transition-all hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
