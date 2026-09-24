import { cn } from '@free-react-templates/ui'

interface TestimonialsProps {
  className?: string
}

const testimonials = [
  {
    name: 'Jessica Torres',
    role: 'Patient',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    seed: 'testi-1',
  },
  {
    name: 'Rebecca Gray',
    role: 'Patient',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    seed: 'testi-2',
  },
]

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section className={cn('py-16', className)} id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-body-dark">Our Patient Says</h2>
          <p className="text-body mt-2">What our patients say about us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://picsum.photos/seed/${t.seed}/100/100')`,
                  }}
                />
                <div>
                  <h4 className="font-bold text-body-dark">{t.name}</h4>
                  <span className="text-sm text-brand-blue">{t.role}</span>
                </div>
              </div>
              <p className="text-body text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
