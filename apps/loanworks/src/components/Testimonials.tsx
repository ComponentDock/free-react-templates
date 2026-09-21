import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare.',
    name: 'Micky Mouse',
    image: 'https://picsum.photos/seed/loanworks-test1/80/80',
  },
  {
    quote:
      'Exceptional service and quick approval. The loan process was seamless from start to finish.',
    name: 'Jane Cooper',
    image: 'https://picsum.photos/seed/loanworks-test2/80/80',
  },
  {
    quote:
      'They helped us secure funding for our startup when no one else would. Highly recommended.',
    name: 'Robert Fox',
    image: 'https://picsum.photos/seed/loanworks-test3/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 h-[3px] w-15 rounded bg-brand" />
          <h2 className="text-3xl font-normal text-navy lg:text-[44px]">Testimonials</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-gray-50 p-6 text-center">
              <Quote size={32} className="mx-auto mb-4 text-brand/30" />
              <p className="mb-4 text-sm italic text-body-text">&ldquo;{t.quote}&rdquo;</p>
              <img
                src={t.image}
                alt={t.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
              />
              <p className="text-sm font-semibold text-navy">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
