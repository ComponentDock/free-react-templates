import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'John Fox',
    role: 'Businessman',
    quote:
      'ByteOps transformed our digital presence completely. Their team delivered a stunning website that exceeded all our expectations.',
    seed: 'byteops-test1',
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Director',
    quote:
      'Working with ByteOps was a game-changer. They understood our vision and executed it flawlessly with attention to every detail.',
    seed: 'byteops-test2',
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    quote:
      'The team at ByteOps is incredibly talented. They built our platform from scratch and it has been performing beautifully.',
    seed: 'byteops-test3',
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    quote:
      'Professional, creative, and reliable. ByteOps delivered our project on time and within budget. Highly recommended.',
    seed: 'byteops-test4',
  },
  {
    name: 'David Brown',
    role: 'CTO',
    quote:
      'ByteOps brings a perfect blend of technical expertise and creative design. Our users love the new interface they created.',
    seed: 'byteops-test5',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Happy Clients</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-gray-800 p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-700">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <Quote className="mx-auto mb-3 h-6 w-6 text-ops-400" />
              <p className="mb-4 text-sm text-gray-300">{t.quote}</p>
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-ops-400">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
