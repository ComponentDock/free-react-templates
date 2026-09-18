const testimonials = [
  {
    name: 'Chad Hawkins',
    quote:
      'Excellent dental care! The staff was friendly and professional. My teeth have never looked better.',
    image: 'https://picsum.photos/seed/molars-person1/100/100',
  },
  {
    name: 'Ayisha Atherton',
    quote:
      'A wonderful experience from start to finish. The clinic is clean and the team really cares about patients.',
    image: 'https://picsum.photos/seed/molars-person2/100/100',
  },
  {
    name: 'Riccardo Gilliam',
    quote:
      'I was nervous about my procedure but the dentist made me feel completely at ease. Highly recommended!',
    image: 'https://picsum.photos/seed/molars-person3/100/100',
  },
  {
    name: 'Jasleen Dunkley',
    quote:
      'Great service and reasonable prices. I have been coming here for years and would not go anywhere else.',
    image: 'https://picsum.photos/seed/molars-person4/100/100',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col items-start">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                  <span className="text-xs text-ink">Customer</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
