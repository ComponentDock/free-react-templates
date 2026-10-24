import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Exceptional legal representation. The team fought tirelessly for my case and secured a settlement that exceeded my expectations. Highly recommend their services.',
    name: 'David Jonathan',
    role: 'Business Owner',
  },
  {
    quote:
      'Professional, responsive, and genuinely caring. They made the entire legal process stress-free and kept me informed every step of the way.',
    name: 'Sarah Mitchell',
    role: 'Real Estate Developer',
  },
  {
    quote:
      'Outstanding attorneys who truly understand their craft. Their expertise in insurance law saved my company from a devastating financial loss.',
    name: 'Michael Torres',
    role: 'CEO, TechStart Inc.',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h2 className="mb-16 text-center font-display text-4xl font-bold text-navy md:text-5xl">
          Words From Clients
        </h2>

        <div className="space-y-12">
          {testimonials.map((item) => (
            <div key={item.name} className="text-center">
              <Quote className="mx-auto mb-6 h-10 w-10 text-primary-300" />
              <p className="mb-8 text-lg leading-relaxed text-smoke italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/justlaw-${item.name.toLowerCase().replace(/\s+/g, '-')}/80/80`}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <span className="font-display text-lg font-bold text-navy-dark">{item.name}</span>
                  <p className="text-sm text-smoke">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
