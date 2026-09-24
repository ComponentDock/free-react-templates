const testimonials = [
  {
    quote: 'Banknote transformed our business finances. Their consulting saved us thousands.',
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart',
  },
  {
    quote: 'The online banking platform is incredibly intuitive. Best experience I have had.',
    name: 'James Cooper',
    role: 'Freelancer',
  },
  {
    quote: 'Their investment advice helped us grow our portfolio by 40% in just one year.',
    name: 'Emily Chen',
    role: 'CFO, GreenTech',
  },
  {
    quote: 'Outstanding customer service and truly personalized financial solutions.',
    name: 'Michael Brown',
    role: 'Small Business Owner',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Happy Customers</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            See what our clients have to say about their experience with Banknote.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border p-6 text-center shadow-sm">
              <p className="mb-6 italic text-gray-600">"{t.quote}"</p>
              <img
                src={`https://picsum.photos/seed/${t.name.replace(' ', '-')}/100/100`}
                alt={t.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
              />
              <h4 className="font-bold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
