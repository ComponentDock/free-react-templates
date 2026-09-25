import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Cloe Marena',
    role: 'Owner of Building Co.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium non eligendi totam natus ullam cumque! Assumenda optio, ad in! Nesciunt natus veritatis hic iste quas.',
    image: 'draftly-testi-1',
  },
  {
    name: 'Nathalie Channie',
    role: 'Owner of Building Co.',
    text: 'Eveniet, laboriosam impedit facilis. Voluptatem, repudiandae eligendi maiores sunt itaque, dolores voluptas labore perferendis, illum tenetur suscipit vero officia.',
    image: 'draftly-testi-2',
  },
  {
    name: 'Will Turner',
    role: 'Owner of Building Co.',
    text: 'Laboriosam nisi natus quos soluta blanditiis iste in distinctio fugiat perferendis, architecto eveniet provident, consequatur dolore ab nihil voluptatibus laborum magnam.',
    image: 'draftly-testi-3',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  const t = TESTIMONIALS[current]!

  return (
    <section className="bg-brand-500 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-white">What client says about?</h2>
        <div className="relative">
          <Quote className="mx-auto mb-6 h-10 w-10 text-white/30" />
          <p className="mb-6 text-lg italic text-white/90">&ldquo;{t.text}&rdquo;</p>
          <img
            src={`https://picsum.photos/seed/${t.image}/80/80`}
            alt={t.name}
            className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
          />
          <h3 className="font-semibold text-white">{t.name}</h3>
          <span className="text-sm text-white/70">{t.role}</span>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
