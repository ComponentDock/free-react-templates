import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Jennifer Hammond',
    role: 'Patient',
    text: 'Medvista provided exceptional care during my treatment. The doctors and staff were incredibly professional and compassionate throughout my entire stay.',
    photo: 'https://picsum.photos/seed/medvista-testi-1/200/200',
  },
  {
    name: 'Mark Anderson',
    role: 'Patient',
    text: 'I have been visiting Medvista for years and the quality of care has always been outstanding. They truly put patients first in everything they do.',
    photo: 'https://picsum.photos/seed/medvista-testi-2/200/200',
  },
  {
    name: 'Laura Stevens',
    role: 'Patient',
    text: 'The team at Medvista made me feel comfortable and well cared for. I highly recommend their services to anyone seeking quality medical care.',
    photo: 'https://picsum.photos/seed/medvista-testi-3/200/200',
  },
] as const

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-cover bg-center bg-fixed py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/medvista-cta/1920/600')" }}
      data-testid="testimonials"
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Read testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">Our Patient Says</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-white/10 p-8 text-center backdrop-blur-sm">
              <img
                src={t.photo}
                alt={`Photo of ${t.name}`}
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />
              <Quote className="mx-auto mt-4 h-8 w-8 text-coral" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-gray-300">{t.text}</p>
              <h3 className="mt-4 text-lg font-bold text-white">{t.name}</h3>
              <p className="text-sm text-coral">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
