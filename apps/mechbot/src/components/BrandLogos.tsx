const logos = [
  { name: 'TechCorp', src: 'https://picsum.photos/seed/mechbot-logo1/120/40' },
  { name: 'InnoLab', src: 'https://picsum.photos/seed/mechbot-logo2/120/40' },
  { name: 'RoboEd', src: 'https://picsum.photos/seed/mechbot-logo3/120/40' },
  { name: 'FutureWorks', src: 'https://picsum.photos/seed/mechbot-logo4/120/40' },
  { name: 'AutomateIO', src: 'https://picsum.photos/seed/mechbot-logo5/120/40' },
]

export function BrandLogos() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-body">
          Trusted by leading organizations
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name + ' logo'}
              className="h-8 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
