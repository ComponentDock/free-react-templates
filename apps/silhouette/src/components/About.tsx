import { Truck, ShieldCheck, Leaf } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'On all orders over $50' },
  { icon: ShieldCheck, title: 'Secure Payment', desc: '100% secure checkout' },
  { icon: Leaf, title: 'Sustainable', desc: 'Eco-friendly materials' },
]

export function About() {
  return (
    <section id="about" className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/silhouette-about/600/500"
            alt="Behind the scenes of our design process"
            className="rounded-2xl object-cover shadow-lg"
            width={600}
            height={500}
          />
        </div>
        <div>
          <h2 className="mb-6 font-serif text-3xl font-bold">Crafted with Intention</h2>
          <p className="mb-8 text-gray-600">
            Every piece in our collection is thoughtfully designed to bring out your unique style.
            We blend timeless aesthetics with modern comfort so you always feel your best.
          </p>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f.title} className="flex items-start gap-4">
                <f.icon className="mt-0.5 shrink-0 text-brand" size={24} />
                <div>
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
