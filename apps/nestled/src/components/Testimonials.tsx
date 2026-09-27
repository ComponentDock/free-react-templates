const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Matthew Smith',
    role: 'CEO — Stack, Inc.',
    img: 'nestled-person1',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque animi omnis quas voluptate aliquam dolore facere, exercitationem, quos nihil iusto.',
    name: 'Mike Smith',
    role: 'CTO — Stack, Inc.',
    img: 'nestled-person2',
  },
]

const first = testimonials[0]!
const second = testimonials[1]!

export function Testimonials() {
  return (
    <section className="py-16" id="testimonials">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-light rounded-lg p-8 relative">
            <span
              className="text-6xl text-brand/20 font-serif absolute top-4 left-6"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="relative z-10 pt-8">
              <p className="text-muted leading-relaxed">{first.quote}</p>
            </blockquote>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={`https://picsum.photos/seed/${first.img}/80/80`}
                alt={first.name}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <strong className="block text-heading">{first.name}</strong>
                <span className="text-sm text-muted">{first.role}</span>
              </div>
            </div>
          </div>
          <div className="bg-light rounded-lg p-8 relative">
            <span
              className="text-6xl text-brand/20 font-serif absolute top-4 left-6"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="relative z-10 pt-8">
              <p className="text-muted leading-relaxed">{second.quote}</p>
            </blockquote>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={`https://picsum.photos/seed/${second.img}/80/80`}
                alt={second.name}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <strong className="block text-heading">{second.name}</strong>
                <span className="text-sm text-muted">{second.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
