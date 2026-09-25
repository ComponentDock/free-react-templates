const services = [
  {
    icon: '🧪',
    title: 'Laboratory Services',
    description:
      'We provide accurate and timely diagnostic laboratory services with state-of-the-art equipment and experienced technicians.',
  },
  {
    icon: '💊',
    title: 'General Treatment',
    description:
      'Our general treatment services cover a wide range of medical conditions with personalized care plans for every patient.',
  },
  {
    icon: '🚑',
    title: 'Emergency Service',
    description:
      'Our emergency department is staffed around the clock with skilled professionals ready to handle any medical emergency.',
  },
  {
    icon: '📞',
    title: '24/7 Help & Support',
    description:
      'We offer round-the-clock helpline support to assist you with appointments, inquiries, and medical guidance.',
  },
] as const

export function ServicesBg() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative overflow-hidden bg-purple-500 py-16"
    >
      <img
        src="https://picsum.photos/seed/curelink-services/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <span className="text-4xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
