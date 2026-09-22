import { Dumbbell, Salad, Apple } from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    title: 'Exercise Program',
    description:
      'Customized workout plans designed by certified trainers to help you reach your fitness goals efficiently.',
    image: 'https://picsum.photos/seed/vitaflow-exercise/400/300',
  },
  {
    icon: Salad,
    title: 'Nutrition Plans',
    description:
      'Personalized meal plans crafted by dietitians to fuel your body with the right nutrients for optimal health.',
    image: 'https://picsum.photos/seed/vitaflow-nutrition/400/300',
  },
  {
    icon: Apple,
    title: 'Diet Program',
    description:
      'Science-backed diet programs that adapt to your lifestyle and help you achieve sustainable weight management.',
    image: 'https://picsum.photos/seed/vitaflow-diet/400/300',
  },
]

export function Services() {
  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <img
                src={service.image}
                alt={service.title}
                className="mb-4 h-48 w-full rounded object-cover"
              />
              <h3 className="mb-2 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mb-4 text-sm text-smoke">{service.description}</p>
              <a
                href="#"
                className="text-sm font-semibold text-primary-400 no-underline hover:text-primary-500"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
