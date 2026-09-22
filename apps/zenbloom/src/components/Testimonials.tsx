import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Yoga Enthusiast',
    image: 'zenbloom-test1',
    text: 'Zenbloom has completely transformed my life. The trainers are incredibly supportive and the community is warm and welcoming.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Park',
    role: 'Fitness Instructor',
    image: 'zenbloom-test2',
    text: 'I have tried many yoga studios, but Zenbloom stands out with its professionalism and the quality of instruction.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 sm:py-20" data-testid="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: text + mini features */}
          <div>
            <p className="mb-1 font-display text-2xl text-ember-400">Testimonials</p>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">What They Are Saying</h2>
            <p className="mb-8 text-gray-500 leading-relaxed">
              Hear from our students about how Zenbloom has made a difference in their lives.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-400/10">
                  <Star className="h-5 w-5 text-sage-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Certified Instructors</h3>
                  <p className="text-sm text-gray-500">
                    All our trainers hold internationally recognized yoga certifications.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-400/10">
                  <Star className="h-5 w-5 text-sage-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personalized Programs</h3>
                  <p className="text-sm text-gray-500">
                    Customized yoga plans tailored to your goals and experience level.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: testimonial cards */}
          <div className="space-y-6">
            {testimonials.map(({ id, name, role, image, text, rating }) => (
              <div key={id} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-ember-400 text-ember-400" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/seed/${image}/80/80`}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{name}</p>
                    <p className="text-xs text-gray-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
