const testimonials = [
  {
    name: 'Roger Scott',
    role: 'Marketing Manager',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'getaway-p1',
  },
  {
    name: 'Sarah Johnson',
    role: 'Travel Blogger',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'getaway-p2',
  },
  {
    name: 'Mike Chen',
    role: 'Adventure Guide',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'getaway-p3',
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-gray-900 py-20">
      <img
        src="https://picsum.photos/seed/getaway-test/1920/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
          Tourist Feedback
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ name, role, quote, seed }) => (
            <div key={name} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <p className="mb-4 text-gray-300">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${seed}/80/80`}
                  alt={name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-sm text-gray-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
