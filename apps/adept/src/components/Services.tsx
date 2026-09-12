import { Palette, Layout, Code, Smartphone, Globe, PenTool } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: Layout,
    title: 'WordPress Integration',
    description: 'Natus totam voluptatibus animi aspernatur ducimus.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Rem possimus distinctio ex obcaecati mollitia quibusdam.',
  },
  {
    icon: Smartphone,
    title: 'HTML5/CSS3',
    description: 'Aperiam neque id illum laudantium consequuntur sunt nisi.',
  },
  {
    icon: Globe,
    title: 'Web Templates',
    description: 'Dolores molestias blanditiis sequi ratione voluptatum.',
  },
  {
    icon: PenTool,
    title: 'Creative Design',
    description: 'Illum laudantium consequuntur sunt nisi aperiam neque.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase md:text-4xl">Services</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
            temporibus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <s.icon size={28} />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold uppercase">{s.title}</h3>
              <p className="text-sm text-mist">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
