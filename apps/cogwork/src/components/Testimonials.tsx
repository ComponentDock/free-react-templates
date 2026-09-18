const testimonials = [
  {
    name: 'John Smith',
    role: 'Companies Client',
    avatar: 'https://picsum.photos/seed/cogwork-person1/80/80',
    quote:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text did not listen.',
  },
  {
    name: 'Joshua Darren',
    role: 'Companies Client',
    avatar: 'https://picsum.photos/seed/cogwork-person2/80/80',
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text decided to leave.',
  },
  {
    name: 'Emily Carter',
    role: 'Companies Client',
    avatar: 'https://picsum.photos/seed/cogwork-person3/80/80',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Happy Clients</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <span className="text-sm text-[#6c757d]">{t.role}</span>
                </div>
              </div>
              <blockquote className="text-[#6c757d] italic">&ldquo;{t.quote}&rdquo;</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
