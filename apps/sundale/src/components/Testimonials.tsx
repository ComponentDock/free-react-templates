const testimonials = [
  {
    id: 1,
    heading: 'Perfect Home for me',
    quote:
      'Etiam nec odio vestibulum est mattis efficiturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis efficiturut magna. Pellentesque sit amet tellus blandit.',
    author: 'Daiane Smith',
    role: 'Customer',
    seed: 'sundale-author-1',
  },
  {
    id: 2,
    heading: 'Excellent Service',
    quote:
      'Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis risus tempor id. Phasellus fringilla nisl sed sem scelerisque.',
    author: 'Michael Torres',
    role: 'Buyer',
    seed: 'sundale-author-2',
  },
  {
    id: 3,
    heading: 'Highly Recommended',
    quote:
      'Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis.',
    author: 'Sarah Chen',
    role: 'Investor',
    seed: 'sundale-author-3',
  },
]

export function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">Client testimonials</h2>
          <p className="text-gray-500">
            Suspendisse dictum enim sit amet libero malesuada feugiat.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <h5 className="mb-4 text-lg font-bold text-gray-800">{t.heading}</h5>
              <p className="mb-6 text-sm leading-relaxed text-gray-500">{t.quote}</p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.author}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <p className="text-sm text-gray-700">
                  {t.author}, <span className="text-gray-400">{t.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
