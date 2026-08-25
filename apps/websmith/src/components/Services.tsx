import { Palette, Monitor, AppWindow, Smartphone, PenTool, Search } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    description:
      'Beautiful, intuitive interfaces that captivate users and strengthen your brand identity across every touchpoint.',
  },
  {
    icon: Monitor,
    title: 'Web Development',
    description:
      'Robust, performant websites built with modern technologies to deliver seamless experiences at scale.',
  },
  {
    icon: AppWindow,
    title: 'Web Apps',
    description:
      'Custom web applications tailored to your business needs, from dashboards to complex SaaS platforms.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications that engage users wherever they are.',
  },
  {
    icon: PenTool,
    title: 'CopyWriting',
    description:
      'Compelling copy that tells your story, connects with your audience, and drives conversions.',
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description:
      'Strategic SEO that increases your visibility and brings qualified traffic to your website.',
  },
] as const

export function Services() {
  return (
    <section id="what-we-do-section" className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            What We Do
          </p>
          <h2 className="mb-4 text-[2.2rem] font-bold text-black">Our Expertise</h2>
          <p className="mx-auto max-w-2xl text-muted-dark">
            We offer a comprehensive suite of digital services to help your business thrive in the
            online world.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-lg border border-card-border bg-white p-8 transition-all hover:-translate-y-0.5"
                style={{
                  borderTop: '2px solid #007bff',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 10px 30px -10px rgba(0,0,0,.4)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-black">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-dark">
                  {service.description}
                </p>
                <a
                  href="#home-section"
                  className="text-xs font-bold uppercase tracking-wide text-brand transition-colors hover:text-black"
                >
                  Learn more
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
