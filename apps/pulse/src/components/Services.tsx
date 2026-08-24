import { Pen, Megaphone, Smartphone, Code2, Palette, Mail, Layout, PaintBucket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-lg border border-gray-200 p-6 text-center transition-all hover:border-pulse-400 hover:shadow-lg">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pulse-50 text-pulse-400 transition-colors group-hover:bg-pulse-400 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-navy-700">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  )
}

const services = [
  {
    icon: Pen,
    title: 'Creative Design',
    description:
      'Stunning visual designs that capture attention and communicate your brand message effectively.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase visibility and drive conversions.',
  },
  {
    icon: Smartphone,
    title: 'Application Design',
    description: 'Intuitive mobile and web application designs focused on user experience.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Fast, scalable, and secure web applications built with modern technologies.',
  },
  {
    icon: Palette,
    title: 'Branding',
    description:
      'Comprehensive brand identity systems that differentiate you from the competition.',
  },
  {
    icon: PaintBucket,
    title: 'Graphic Design',
    description: 'Eye-catching graphics for print and digital media that elevate your brand.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Engaging email campaigns that nurture leads and build customer loyalty.',
  },
  {
    icon: Layout,
    title: 'Web Design',
    description: 'Beautiful, responsive websites that provide exceptional user experiences.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy-700 sm:text-4xl">
          Our Exclusive Services We Offer For You
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          We provide comprehensive digital solutions tailored to help your business succeed in
          today's competitive landscape.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
