const logos = [
  { name: 'Acme Corp', seed: 'indigo-logo-acme' },
  { name: 'Globex', seed: 'indigo-logo-globex' },
  { name: 'Initech', seed: 'indigo-logo-initech' },
  { name: 'Umbrella', seed: 'indigo-logo-umbrella' },
  { name: 'Hooli', seed: 'indigo-logo-hooli' },
]

export function ClientLogos() {
  return (
    <section className="py-16 sm:py-20 lg:py-28" data-testid="client-logos">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="grayscale opacity-20 transition-all hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={`https://picsum.photos/seed/${logo.seed}/140/50`}
                alt={`${logo.name} logo`}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
