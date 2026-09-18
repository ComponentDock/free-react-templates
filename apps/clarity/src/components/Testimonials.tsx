const testimonials = [
  {
    quote:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen.',
    name: 'Ricky Fisher',
    avatar: 'https://picsum.photos/seed/person1/100/100',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
    name: 'Ken Davis',
    avatar: 'https://picsum.photos/seed/person2/100/100',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Mellisa Griffin',
    avatar: 'https://picsum.photos/seed/person3/100/100',
  },
  {
    quote:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus. Separated they live in Bookmarksgrove.',
    name: 'Robert Steward',
    avatar: 'https://picsum.photos/seed/person4/100/100',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Happy Customers</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <blockquote className="mb-4 text-gray-600 italic">&ldquo;{t.quote}&rdquo;</blockquote>
              <figure>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
              </figure>
              <h3 className="font-bold text-gray-900">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
