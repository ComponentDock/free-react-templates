const industries = [
  'Airport & Airlines',
  'House & Offices',
  'Auto Dealerships',
  'Sports & Fitness Centers',
  'Schools & Universities',
  'Commercial Building',
  'Medical Facilities',
  'Entertainment Venues',
]

export function Industries() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/sweeply-industries/800/600"
              alt="Industries we serve"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-sm font-bold text-brand uppercase tracking-wider">Services</span>
            <h2 className="text-3xl font-bold text-heading mt-3 mb-6">Industries We Serve</h2>
            <p className="text-body mb-6 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industries.map((item) => (
                <div key={item} className="flex items-center gap-2 text-body">
                  <span className="fa fa-check text-brand" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
