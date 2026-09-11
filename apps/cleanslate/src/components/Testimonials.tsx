import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Absolutely fantastic service! The team was professional, punctual, and left our office sparkling clean. Highly recommended for any business looking for reliable cleaning.',
    name: 'James Peterson',
    role: 'Business Owner',
    avatar: 'https://picsum.photos/seed/cleanslate-test1/100/100',
  },
  {
    text: "We have been using their services for over two years now and couldn't be happier. Consistent quality and great attention to detail every single time.",
    name: 'Sarah Anderson',
    role: 'Office Manager',
    avatar: 'https://picsum.photos/seed/cleanslate-test2/100/100',
  },
  {
    text: 'Our home has never looked better. The deep cleaning service transformed every room. The staff was friendly and thorough — will definitely use again!',
    name: 'Michael Chen',
    role: 'Homeowner',
    avatar: 'https://picsum.photos/seed/cleanslate-test3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-brand-dark text-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-accent uppercase tracking-wider text-sm font-medium">
            Testimonies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Happy Customers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map(({ text, name, role, avatar }) => (
            <div key={name} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <Quote className="w-8 h-8 text-brand-accent mb-4" />
              <p className="text-white/80 text-sm leading-relaxed mb-6">{text}</p>
              <div className="flex items-center gap-3">
                <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sm">{name}</h4>
                  <span className="text-white/60 text-xs">{role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
