const logos = [
  { seed: 'sarto-client-1', alt: 'Client 1' },
  { seed: 'sarto-client-2', alt: 'Client 2' },
  { seed: 'sarto-client-3', alt: 'Client 3' },
  { seed: 'sarto-client-4', alt: 'Client 4' },
  { seed: 'sarto-client-5', alt: 'Client 5' },
]

export function ClientsLogo() {
  return (
    <section className="border-y border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-8 overflow-hidden">
          {logos.map((logo) => (
            <img
              key={logo.seed}
              src={`https://picsum.photos/seed/${logo.seed}/120/40`}
              alt={logo.alt}
              className="h-10 w-auto opacity-50 grayscale transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
