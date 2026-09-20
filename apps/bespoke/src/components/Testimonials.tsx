import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Adam Aderson',
    quote:
      'There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    seed: 'bespoke-person-1',
  },
  {
    name: 'Lukas Devlin',
    quote:
      'There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    seed: 'bespoke-person-2',
  },
  {
    name: 'Kayla Bryant',
    quote:
      'There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    seed: 'bespoke-person-3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display mb-10 text-3xl font-bold text-black md:text-4xl">
          Testimonials
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col items-center">
              <img
                src={`https://picsum.photos/seed/${t.seed}/100/100`}
                alt={t.name}
                className="mb-4 h-20 w-20 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mb-2 text-lg font-bold text-black">{t.name}</h3>
              <Quote size={16} className="mb-2 text-brand" />
              <p className="text-sm italic leading-relaxed text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
