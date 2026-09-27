import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

function TestimonialCard({ quote, author, role }: TestimonialProps) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
      <Quote className="mb-4 h-8 w-8 text-brand/30" />
      <p className="mb-6 text-sm leading-relaxed text-paragraph italic">"{quote}"</p>
      <div>
        <p className="text-sm font-bold text-brand-dark">{author}</p>
        <p className="text-xs text-body">{role}</p>
      </div>
    </div>
  )
}

export function TestimonialsPanel() {
  const testimonials = [
    {
      quote:
        'Jeremy delivered exceptional work on our project. His attention to detail and creative solutions exceeded our expectations.',
      author: 'Sarah Johnson',
      role: 'CEO, TechStart',
    },
    {
      quote:
        'A true professional with an incredible eye for design. The final product was exactly what we envisioned and more.',
      author: 'Michael Chen',
      role: 'Product Manager, InnovateCo',
    },
    {
      quote:
        'Working with Jeremy was a fantastic experience. He understood our needs and delivered a stunning website on time.',
      author: 'Emma Williams',
      role: 'Marketing Director, BrandLab',
    },
  ]

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-brand-dark">Testimonials</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} {...t} />
        ))}
      </div>
    </div>
  )
}
