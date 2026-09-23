const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Garreth Smith',
    role: 'Web Developer',
    avatar: 'https://picsum.photos/seed/jobspot-testi-1/100/100',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live.',
    name: 'John Doe',
    role: 'UI/UX Designer',
    avatar: 'https://picsum.photos/seed/jobspot-testi-2/100/100',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    name: 'Jane Smith',
    role: 'Product Manager',
    avatar: 'https://picsum.photos/seed/jobspot-testi-3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24">
      <img
        src="https://picsum.photos/seed/jobspot-testi-bg/1920/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-brand-green">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-white">Happy Clients</h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="min-w-[300px] flex-shrink-0 snap-center rounded-lg bg-white/10 p-6 backdrop-blur-sm"
            >
              <p className="mb-4 text-sm leading-relaxed text-gray-200">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-gray-300">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
