const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    quote:
      'Excellent roofing service! They replaced our entire roof in just two days. The quality is outstanding and the price was very fair.',
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    quote:
      'Professional team with great attention to detail. Our commercial building looks brand new after their work.',
  },
  {
    name: 'Emily Davis',
    role: 'Property Manager',
    quote:
      'We have used their services for multiple properties. Always reliable, always on time. Highly recommended!',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Happy Clients &amp; Feedbacks
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded border border-gray-200 bg-white p-6 shadow-sm">
              <p className="mb-4 italic text-gray-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.name.replace(/\s/g, '-')}/60/60`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
