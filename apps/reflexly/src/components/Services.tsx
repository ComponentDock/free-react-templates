import { Camera, Video, ImageIcon } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Shooting',
    description:
      'Professional photography sessions tailored to your vision. From portrait shoots to event coverage, we capture every detail with precision.',
    image: 'https://picsum.photos/seed/reflexly-svc-1/400/300',
    alt: 'Professional photography shooting service',
  },
  {
    icon: Video,
    title: 'Videos',
    description:
      'Cinematic video production that brings stories to life. We handle everything from concept development to final post-production editing.',
    image: 'https://picsum.photos/seed/reflexly-svc-2/400/300',
    alt: 'Video production service',
  },
  {
    icon: ImageIcon,
    title: 'Editing',
    description:
      'Expert photo and video editing to polish your content. Color grading, retouching, and creative effects to elevate your visuals.',
    image: 'https://picsum.photos/seed/reflexly-svc-3/400/300',
    alt: 'Photo and video editing service',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-bg-services py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold uppercase tracking-wider text-text-primary md:text-4xl">
            Our Services
          </h2>
          <div className="mx-auto h-1 w-16 bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-none bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Icon className="text-brand" size={28} />
                    <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
