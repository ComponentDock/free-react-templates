const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, BuildRight Inc.',
    image: 'https://picsum.photos/seed/trowel-test1/80/80',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Director, UrbanDev',
    image: 'https://picsum.photos/seed/trowel-test2/80/80',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  },
  {
    name: 'Mike Wilson',
    role: 'Manager, ConstructCo',
    image: 'https://picsum.photos/seed/trowel-test3/80/80',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-500">
            Testimonials
          </p>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Happy Clients</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, role, image, text }) => (
            <div key={name} className="rounded bg-white p-6 shadow-sm">
              <p className="mb-6 text-sm leading-relaxed text-gray-600">{text}</p>
              <div className="flex items-center gap-3">
                <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{name}</p>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
