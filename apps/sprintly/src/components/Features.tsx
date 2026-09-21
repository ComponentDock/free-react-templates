import { Users, Dumbbell, Apple } from 'lucide-react'

const features = [
  {
    title: 'Group Classes',
    description:
      'High-energy group workouts led by certified instructors. From HIIT to yoga, find your fit.',
    Icon: Users,
    image: 'https://picsum.photos/seed/sprintly-feat1/600/400',
  },
  {
    title: 'Personal Training',
    description:
      'One-on-one sessions tailored to your goals. Our trainers create customized programs.',
    Icon: Dumbbell,
    image: 'https://picsum.photos/seed/sprintly-feat2/600/400',
  },
  {
    title: 'Sports Nutrition',
    description: 'Fuel your performance with expert nutrition plans designed for optimal results.',
    Icon: Apple,
    image: 'https://picsum.photos/seed/sprintly-feat3/600/400',
  },
]

export function Features() {
  return (
    <section className="bg-dark-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ title, description, Icon, image }) => (
            <div key={title} className="group relative overflow-hidden rounded-lg bg-dark-700">
              <div
                className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url('${image}')` }}
              />
              <div className="p-6">
                <Icon className="mb-3 h-8 w-8 text-brand-500" />
                <h3 className="font-heading text-xl font-semibold uppercase text-white">{title}</h3>
                <p className="mt-2 text-sm text-dark-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
