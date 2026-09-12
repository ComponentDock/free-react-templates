const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'John Doe',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    author: 'Jane Smith',
  },
]

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">Happy Customers</h2>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[100px] leading-none text-black">&ldquo;</div>
          {testimonials.map((t, i) => (
            <blockquote key={i} className="mb-6">
              <p className="text-lg leading-relaxed text-gray-500">&ldquo;{t.quote}&rdquo;</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
