import { Megaphone, BarChart3, Palette, Code2, Globe, Layout, ChevronRight } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

const services = [
  { title: 'Digital Products', icon: Megaphone },
  { title: 'Online Marketing', icon: BarChart3 },
  { title: 'Graphic Design', icon: Palette },
  { title: 'App Development', icon: Code2 },
  { title: 'Web Development', icon: Globe },
  { title: 'UX/UI Design', icon: Layout },
]

export function Services() {
  return (
    <section className="bg-dark py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-lg">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            We Shape The <br /> Perfect Solutions
          </h2>
          <p className="text-gray-400">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string }

function ServiceCard({ title, icon: Icon }: { title: string; icon: ComponentType<IconProps> }) {
  return (
    <div className="group flex items-center justify-between rounded-lg bg-dark-lighter p-6 transition-colors hover:bg-primary-300">
      <div className="flex items-center gap-4">
        <Icon size={32} className="text-primary-300 group-hover:text-dark" />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ChevronRight size={20} className="text-gray-400 group-hover:text-dark" />
    </div>
  )
}
