import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'This platform has transformed my career. The courses are comprehensive and the instructors are world-class.',
    name: 'James Wilson',
    title: 'Marketing Graduate',
    image: 'https://picsum.photos/80/80?random=30',
  },
  {
    text: 'I cannot recommend this enough. The learning experience is unmatched and the support is incredible.',
    name: 'Jessica Brown',
    title: 'Computer Science Student',
    image: 'https://picsum.photos/80/80?random=31',
  },
]

export function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed px-4 py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/1600/800?random=40)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 bg-dark-bg/80" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
          >
            What our students say
          </h2>
          <p className="mt-3 text-gray-400">Hear from our community of learners</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
              <Quote className="mb-4 h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mb-6 text-gray-200 italic">{t.text}</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <cite className="not-italic font-heading font-bold text-white">{t.name}</cite>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
