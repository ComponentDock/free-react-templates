import { Heart, Leaf } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description:
      'World the end of summer the sweltering heat makes human sweat in the night and man plants and trees wilt even.',
  },
  {
    icon: Leaf,
    title: 'Nature Photography',
    description:
      'That the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker, the flash of lightning illuminates the dark skies.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 max-w-xl">
          <p className="mb-2 font-heading text-sm font-medium uppercase tracking-widest text-slate-900">
            Our service
          </p>
          <h2 className="font-heading text-4xl font-semibold uppercase text-gray-200 sm:text-5xl">
            What We Offer
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-900/5">
                <Icon className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="mb-4 font-heading text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mb-6 max-w-md leading-relaxed text-gray-400">{description}</p>
              <a
                href="#"
                className="inline-block border-2 border-slate-900 px-8 py-3 font-heading text-sm font-medium uppercase tracking-widest text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
