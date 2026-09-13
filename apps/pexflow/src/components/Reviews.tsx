const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Project Manager',
    text: 'Pexflow delivered our project on time and beyond expectations. Their attention to detail is remarkable.',
  },
  {
    name: 'Sarah Williams',
    role: 'CEO, BuildTech',
    text: 'Outstanding construction quality and professionalism. We have partnered on multiple projects now.',
  },
  {
    name: 'James Rodriguez',
    role: 'Director of Operations',
    text: 'Reliable, innovative, and always focused on quality. Highly recommend Pexflow for any construction needs.',
  },
] as const

export function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">Testimonials</p>
          <h2 className="text-3xl font-bold text-heading">Some Feedback From Client</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map(({ name, role, text }) => (
            <div key={name} className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${name.replace(/\s/g, '')}/80/80`}
                  alt={name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-heading">{name}</p>
                  <p className="text-sm text-muted">{role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-body">&ldquo;{text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
