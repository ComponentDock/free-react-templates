import { Box, PenTool, Building2 } from 'lucide-react'

const services = [
  {
    icon: Box,
    title: '3D Modeling',
    description:
      'We create photorealistic 3D models and visualizations that bring your product concepts to life with stunning detail and accuracy.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description:
      'User-centered design solutions that combine aesthetics with functionality, ensuring seamless digital experiences for your audience.',
  },
  {
    icon: Building2,
    title: 'Architectural Design',
    description:
      'Innovative architectural designs that blend form and function, creating spaces that inspire and serve their purpose effectively.',
  },
]

export function Services() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-dark">Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <service.icon className="h-8 w-8 text-brand" />
              </div>
              <h3 className="mb-3 font-poppins text-xl font-semibold text-dark">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
