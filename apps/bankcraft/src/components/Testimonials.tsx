const testimonials = [
  {
    name: 'John Smith',
    role: 'Business Owner',
    text: 'Bankcraft transformed how I manage my business finances. The consulting team is exceptional.',
  },
  {
    name: 'Maria Garcia',
    role: 'Entrepreneur',
    text: 'The loan process was incredibly smooth. I got approved within 48 hours and the rates were competitive.',
  },
  {
    name: 'David Lee',
    role: 'Freelancer',
    text: 'Their savings accounts offer great interest rates. My money has been growing steadily since I switched.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Happy Customers</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            See what our clients have to say about their experience with Bankcraft.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-white p-8 shadow-sm">
              <p className="mb-6 text-gray-500 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
                <img
                  src={`https://picsum.photos/seed/bankcraft-${t.name.split(' ')[0]!.toLowerCase()}/60/60`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-ink">{t.name}</h4>
                  <p className="text-sm text-brand">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
