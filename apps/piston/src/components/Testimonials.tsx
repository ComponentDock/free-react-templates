const testimonials = [
  {
    quote: 'Piston changed my life. The coaches are incredible and the facilities are top-notch.',
    name: 'Jessica Adams',
    role: 'Member since 2023',
    avatar: 'piston-test1',
  },
  {
    quote: 'I lost 30 pounds in 6 months. The personalized programs made all the difference.',
    name: 'Michael Torres',
    role: 'Member since 2022',
    avatar: 'piston-test2',
  },
  {
    quote: 'Best gym experience I have ever had. The community here is so supportive.',
    name: 'Sarah Kim',
    role: 'Member since 2024',
    avatar: 'piston-test3',
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-dark py-20">
      <img
        src="https://picsum.photos/seed/piston-test-bg/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-bold text-white">What Our Customers Say</h2>
        <p className="mb-12 text-gray-400">Real stories from real members</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-darker p-6 text-left">
              <p className="mb-4 italic text-gray-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.avatar}/50/50`}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <span className="block text-sm font-semibold text-white">{t.name}</span>
                  <span className="text-xs text-gray-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
