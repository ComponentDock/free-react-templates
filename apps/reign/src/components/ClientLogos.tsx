const clients = ['Google', 'InVision', 'Nike', 'Microsoft']

export function ClientLogos() {
  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {clients.map((name) => (
            <div key={name} className="flex items-center justify-center">
              <span className="text-2xl font-bold text-text-body/30">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
