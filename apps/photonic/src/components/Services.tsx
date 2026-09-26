import { Camera, User, Heart, Coffee } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Nature Photography',
    description:
      'Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis.',
  },
  {
    icon: User,
    title: 'Portrait Photography',
    description:
      'Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis.',
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description:
      'Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis.',
  },
  {
    icon: Coffee,
    title: 'Food & Drink Photography',
    description:
      'Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <div key={svc.title} className="group text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-surface transition group-hover:bg-brand-400 group-hover:text-white">
                <svc.icon size={32} className="text-brand-400 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{svc.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
