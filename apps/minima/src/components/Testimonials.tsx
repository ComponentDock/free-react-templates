import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  name: string
  position: string
  imageSeed: string
}

function TestimonialCard({ quote, name, position, imageSeed }: TestimonialProps) {
  return (
    <div className="rounded-lg bg-surface p-6 shadow-sm">
      <Quote className="mb-4 h-8 w-8 text-brand" aria-hidden="true" />
      <p className="mb-6 text-muted">{quote}</p>
      <div className="flex items-center gap-3">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/80/80`}
          alt={`${name} avatar`}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-bold text-ink">{name}</p>
          <p className="text-sm text-muted">{position}</p>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    imageSeed: 'minima-test1',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Sarah Connor',
    position: 'Project Director',
    imageSeed: 'minima-test2',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'David Chen',
    position: 'Lead Designer',
    imageSeed: 'minima-test3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-ink">
          Clients Say About Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
