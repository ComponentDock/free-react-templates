const logos = [
  { name: 'TechCorp', seed: 'industrix-logo1' },
  { name: 'BuildPro', seed: 'industrix-logo2' },
  { name: 'SteelWorks', seed: 'industrix-logo3' },
  { name: 'EngiMax', seed: 'industrix-logo4' },
  { name: 'Constructa', seed: 'industrix-logo5' },
  { name: 'PowerGrid', seed: 'industrix-logo6' },
  { name: 'InfraLink', seed: 'industrix-logo7' },
]

export function BrandLogos() {
  return (
    <section className="bg-surface py-12" aria-label="Partner logos">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={`https://picsum.photos/seed/${logo.seed}/120/50`}
              alt={`${logo.name} logo`}
              className="h-10 w-auto opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
