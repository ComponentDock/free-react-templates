import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Gabby Smith',
    role: 'Customer',
  },
  {
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'John Doe',
    role: 'Member',
  },
  {
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Jane Wilson',
    role: 'Trainer',
  },
]

export function Testimonies() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-400">
            Testimonies
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Successful Stories</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ text, name, role }) => (
            <div key={name} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-brand-400" />
              <p className="mb-6 text-sm leading-relaxed text-gray-600">{text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/vigor-person-${name}/80/80`}
                  alt={name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">{name}</p>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
