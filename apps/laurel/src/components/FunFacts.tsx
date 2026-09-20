const facts = [
  { number: '20k', label: 'Graduated Students' },
  { number: '124', label: 'Expert Instructors' },
  { number: '600k', label: 'Books in Library' },
  { number: '15k', label: 'Students Get Employed' },
]

export function FunFacts() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/laurel-facts/1920/600)' }}
    >
      <div className="absolute inset-0 bg-brand-dark/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center">
              <p className="font-heading text-5xl font-bold text-primary sm:text-6xl">
                {fact.number}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-300">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
