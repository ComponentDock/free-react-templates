const testimonials = [
  {
    name: 'Harold Howard',
    location: 'New York',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Maria Santos',
    location: 'Los Angeles',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'James Wilson',
    location: 'Chicago',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-light">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-brand uppercase tracking-wider">Testimonial</span>
          <h2 className="text-3xl font-bold text-heading mt-3">What Are Clients Says</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`https://picsum.photos/seed/${t.name.replace(/\s/g, '')}/100/100`}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-heading">{t.name}</p>
                  <span className="text-sm text-muted">{t.location}</span>
                </div>
              </div>
              <p className="text-body text-sm leading-relaxed italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
