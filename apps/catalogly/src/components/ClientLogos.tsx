const logos = Array.from({ length: 6 }, (_, i) => ({
  src: `https://picsum.photos/seed/catalogly-logo${i}/120/40`,
  alt: `Client partner ${i + 1}`,
}))

export function ClientLogos() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
