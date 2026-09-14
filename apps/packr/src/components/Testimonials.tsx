import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Andrew Field',
    role: 'Blogger',
    image: 'https://picsum.photos/seed/packr-person1/200/200',
  },
  {
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Mark Bubble',
    role: 'Web Designer',
    image: 'https://picsum.photos/seed/packr-person2/200/200',
  },
  {
    text: 'Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    author: 'Adam Smith',
    role: 'Guest',
    image: 'https://picsum.photos/seed/packr-person3/200/200',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-cloud py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-mono text-3xl font-normal text-ink sm:text-4xl">
          Our Client Says:
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="text-center">
              <img
                src={t.image}
                alt={t.author}
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
              />
              <blockquote className="relative px-4">
                <Quote className="mx-auto mb-2 h-5 w-5 text-brand/40" aria-hidden="true" />
                <p className="font-mono text-sm leading-relaxed text-mist">{t.text}</p>
                <cite className="mt-4 block font-mono text-sm font-medium not-italic text-ink">
                  {t.author}, <span className="text-mist">{t.role}</span>
                </cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
