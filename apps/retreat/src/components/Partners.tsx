const partners = ['Partner One', 'Partner Two', 'Partner Three', 'Partner Four', 'Partner Five']

export function Partners() {
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {partners.map((name) => (
            <div key={name} className="text-gray-400 font-bold text-lg tracking-wide">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
