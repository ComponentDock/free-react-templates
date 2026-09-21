const testimonials = [
  {
    name: 'Katie Johnson',
    quote:
      'GritBox completely changed my approach to fitness. The coaches are incredibly supportive and the community keeps me motivated every day.',
    avatar: 'https://picsum.photos/seed/gritbox-test1/200/200',
  },
  {
    name: 'Jane Mars',
    quote:
      'I have tried many gyms but nothing compares to GritBox. The crossfit programs are challenging and the results speak for themselves.',
    avatar: 'https://picsum.photos/seed/gritbox-test2/200/200',
  },
  {
    name: 'Shane Holmes',
    quote:
      'As a competitive athlete, I needed a gym that could keep up with my training demands. GritBox delivers every single time.',
    avatar: 'https://picsum.photos/seed/gritbox-test3/200/200',
  },
  {
    name: 'Mark Johnson',
    quote:
      'Lost 30 pounds in 4 months thanks to the personalized programs at GritBox. Best investment I have ever made in myself.',
    avatar: 'https://picsum.photos/seed/gritbox-test4/200/200',
  },
]

export function Testimonies() {
  return (
    <section id="testimonies" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="relative inline-block text-3xl font-bold uppercase text-ink md:text-4xl">
            <span className="relative z-10">Testimonies</span>
            <span className="absolute bottom-0 left-1/2 h-1 w-10 -translate-x-1/2 bg-brand" />
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-6 rounded-lg bg-white p-6 shadow-sm">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h4 className="font-bold text-ink">{t.name}</h4>
                <blockquote className="mt-2 text-sm leading-relaxed text-mist">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
