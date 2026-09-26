import { Camera, Image, Video } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography services for portraits, events, and commercial shoots.',
  },
  {
    icon: Image,
    title: 'Image Processing',
    description: 'Expert photo editing, retouching, and post-processing to enhance your images.',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'High-quality video production for events, commercials, and creative projects.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div key={svc.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-400/10">
                  <Icon className="h-8 w-8 text-brand-400" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{svc.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{svc.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
