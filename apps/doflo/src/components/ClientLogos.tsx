const logos = [
  { name: 'Client 1', seed: 'doflo-client-1' },
  { name: 'Client 2', seed: 'doflo-client-2' },
  { name: 'Client 3', seed: 'doflo-client-3' },
  { name: 'Client 4', seed: 'doflo-client-4' },
  { name: 'Client 5', seed: 'doflo-client-5' },
  { name: 'Client 6', seed: 'doflo-client-6' },
]

export function ClientLogos() {
  return (
    <section aria-label="Client logos" className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale">
          {logos.map((logo) => (
            <img
              key={logo.seed}
              src={`https://picsum.photos/seed/${logo.seed}/120/40`}
              alt={`${logo.name} logo`}
              className="h-8 w-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
