const references = [
  {
    quote:
      'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed tristique justo nec mauris efficitur.',
    name: 'Robert G. Smith',
    role: 'Manager, Company',
  },
  {
    quote:
      'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed tristique justo nec mauris efficitur.',
    name: 'Robert G. Smith',
    role: 'Manager, Company',
  },
  {
    quote:
      'Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed tristique justo nec mauris efficitur.',
    name: 'Robert G. Smith',
    role: 'Manager, Company',
  },
]

export function References() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-dark mb-16 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-dark">
          References
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {references.map((ref, i) => (
            <div key={i} className="bg-light p-8 rounded-lg">
              <span className="text-5xl text-accent font-serif leading-none">&ldquo;</span>
              <p className="text-muted leading-relaxed mt-4 mb-6">{ref.quote}</p>
              <h3 className="text-lg font-bold text-dark">{ref.name}</h3>
              <p className="text-sm text-muted">{ref.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
