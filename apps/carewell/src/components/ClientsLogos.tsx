const logos = [
  { name: 'Partner 1', seed: 'carewell-logo-1' },
  { name: 'Partner 2', seed: 'carewell-logo-2' },
  { name: 'Partner 3', seed: 'carewell-logo-3' },
  { name: 'Partner 4', seed: 'carewell-logo-4' },
  { name: 'Partner 5', seed: 'carewell-logo-5' },
  { name: 'Partner 6', seed: 'carewell-logo-6' },
]

export function ClientsLogos() {
  return (
    <section className="border-y border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map(({ name, seed }) => (
            <img
              key={name}
              src={`https://picsum.photos/seed/${seed}/120/60`}
              alt={name}
              className="h-10 w-auto opacity-40 grayscale transition-opacity hover:opacity-70"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
