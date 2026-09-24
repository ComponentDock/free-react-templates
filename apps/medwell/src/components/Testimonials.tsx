import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Saw kind fruitful itself in man. All in life good wherein beginning their he air That, the saw very years created for seed have without.',
    author: 'Dr. Suzanne Holroyd',
    avatar: 'https://picsum.photos/seed/medwell-testi1/100/100',
  },
  {
    quote:
      "Can't him fowl his can not ready for game. Saw kind fruitful itself in man. All in life good wherein beginning.",
    author: 'Dr. James Mitchell',
    avatar: 'https://picsum.photos/seed/medwell-testi2/100/100',
  },
  {
    quote:
      'Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land lights divided.',
    author: 'Dr. Emily Carter',
    avatar: 'https://picsum.photos/seed/medwell-testi3/100/100',
  },
]

export function Testimonials() {
  return (
    <section
      className="relative bg-surface py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(247,247,247,0.9), rgba(247,247,247,0.9)), url(https://picsum.photos/seed/medwell-testi-bg/1920/600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="flex flex-col items-center text-center">
              <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-white">
                <img src={t.avatar} alt={t.author} className="h-full w-full object-cover" />
              </div>
              <Quote className="mb-3 h-6 w-6 text-brand-500" />
              <p className="mb-4 text-sm leading-relaxed text-body italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <h4 className="font-heading text-sm font-semibold text-heading">- {t.author} -</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
