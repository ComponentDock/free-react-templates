const testimonials = [
  {
    quote:
      "Working with Northstar has been absolutely transformative. The coaching sessions helped me gain clarity on my goals and provided the tools I needed to achieve them. I've never felt more confident and empowered.",
    name: 'Jessica Williams',
    avatar: 'https://picsum.photos/seed/northstar-testi-1/100/100',
  },
  {
    quote:
      "I was stuck in my career and didn't know which direction to go. The personalized coaching I received gave me the courage and strategy to make a complete career change. Best decision I ever made!",
    name: 'David Martinez',
    avatar: 'https://picsum.photos/seed/northstar-testi-2/100/100',
  },
  {
    quote:
      'The wellness coaching program helped me find balance in my chaotic life. I learned practical techniques for managing stress and maintaining my mental health. I highly recommend their services to everyone.',
    name: 'Emily Chen',
    avatar: 'https://picsum.photos/seed/northstar-testi-3/100/100',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16" aria-label="Testimonials">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-[#212529] md:text-4xl font-heading">
          Happy Customers
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[#737373]">
          Hear from the people whose lives have been changed through our coaching programs.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-lg border border-gray-200 p-8">
              <blockquote className="mb-6 text-[#333333] leading-relaxed italic">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <span className="font-bold text-[#212529]">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
