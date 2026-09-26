const services = [
  {
    title: 'Experience Design',
    description: 'Crafting end-to-end user journeys that delight and convert.',
  },
  {
    title: 'Interaction Design',
    description: 'Designing micro-interactions that make interfaces feel alive.',
  },
  {
    title: 'Front-end Design',
    description: 'Bridging design and code with pixel-perfect, accessible implementations.',
  },
]

export function Expertise() {
  return (
    <section data-testid="expertise" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-maroon">My Expertise</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="rounded bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-maroon">{svc.title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
