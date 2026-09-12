import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  name: string
  role: string
  imageUrl: string
}

function Testimonial({ quote, name, role, imageUrl }: TestimonialProps) {
  return (
    <div className="flex gap-6 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
        <img src={imageUrl} alt={name} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500">
          <Quote className="h-3 w-3 text-white" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm text-gray-200">&ldquo;{quote}&rdquo;</p>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-xs text-gray-400">{role}</p>
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    name: 'Jeff Freshman',
    role: 'Guest',
    imageUrl: 'https://picsum.photos/seed/squadly-person1/100/100',
  },
  {
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    name: 'Sarah Mitchell',
    role: 'Contractor',
    imageUrl: 'https://picsum.photos/seed/squadly-person2/100/100',
  },
  {
    quote: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    name: 'Mike Reynolds',
    role: 'Project Manager',
    imageUrl: 'https://picsum.photos/seed/squadly-person3/100/100',
  },
]

export function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/squadly-test/1600/900)' }}
    >
      <div className="absolute inset-0 bg-gray-900/85" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Read Testimonials
          </span>
          <h2 className="text-3xl font-bold text-white">Our Happy Customer Says</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
