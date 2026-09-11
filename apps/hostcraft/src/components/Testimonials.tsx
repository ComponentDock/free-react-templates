import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, TechCorp',
    text: 'Hostcraft has been amazing for our business. The uptime is incredible and support is always helpful.',
    avatar: 'https://picsum.photos/seed/hostcraft-avatar1/100/100',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO, StartupXYZ',
    text: 'Switching to Hostcraft was the best decision. Performance improved dramatically.',
    avatar: 'https://picsum.photos/seed/hostcraft-avatar2/100/100',
  },
  {
    name: 'Mike Williams',
    role: 'Founder, WebAgency',
    text: 'Reliable hosting with excellent support. Highly recommend for any web project.',
    avatar: 'https://picsum.photos/seed/hostcraft-avatar3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-bg-main py-20">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[4px] text-brand">Testimonials</p>
        <h2 className="mb-12 text-3xl font-bold text-text-primary">Customer Says</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-bg-light p-8 text-left">
              <Quote className="mb-4 text-brand" size={24} />
              <p className="mb-6 text-sm leading-relaxed text-text-muted">{t.text}</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-bold text-text-primary">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
