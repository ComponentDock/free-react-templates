import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Working with this team transformed our business approach. Their strategic insights helped us achieve remarkable growth in just six months.',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: 'https://picsum.photos/seed/venture-testi1/80/80',
  },
  {
    text: 'Exceptional service and attention to detail. They understood our vision and delivered results that exceeded all expectations.',
    name: 'Michael Chen',
    role: 'Marketing Director, GlobalCo',
    avatar: 'https://picsum.photos/seed/venture-testi2/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center mb-12 last:mb-0">
              <Quote className="mx-auto text-[#04dbec] mb-6" size={48} />
              <p className="text-[#506172] text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-left">
                  <span
                    className="block text-[#0b1c39] font-semibold"
                    style={{ fontFamily: 'Josefin Sans, sans-serif' }}
                  >
                    {testimonial.name}
                  </span>
                  <span className="text-[#506172] text-sm">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
