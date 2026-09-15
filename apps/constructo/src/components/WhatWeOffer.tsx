import { Home, PenTool, PaintBucket } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Building Construction',
    desc: 'Complete building construction services from foundation to finishing with quality materials.',
    img: 'https://picsum.photos/seed/constructo-offer-1/400/300',
  },
  {
    icon: PenTool,
    title: 'Project Planning',
    desc: 'Comprehensive project planning and management to ensure your construction runs smoothly.',
    img: 'https://picsum.photos/seed/constructo-offer-2/400/300',
  },
  {
    icon: PaintBucket,
    title: 'House Renovation',
    desc: 'Expert renovation services to transform your existing space into something extraordinary.',
    img: 'https://picsum.photos/seed/constructo-offer-3/400/300',
  },
]

export function WhatWeOffer() {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-heading">What We Offer</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
          <p className="mt-6 text-sm text-body">
            Our comprehensive construction services cover everything you need
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <s.icon className="mb-3 h-8 w-8 text-accent" aria-hidden="true" />
                <h3 className="mb-2 font-heading text-lg font-bold uppercase text-heading">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-body">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
