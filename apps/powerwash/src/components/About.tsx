import { Award, Users, Shield, Headphones } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: '50 Years of Service',
    desc: 'With half a century of experience, we deliver unmatched expertise in every pressure washing project we undertake.',
  },
  {
    icon: Users,
    title: 'Professional & Experienced Staff',
    desc: 'Our trained professionals use the latest equipment and techniques to ensure outstanding results every time.',
  },
  {
    icon: Shield,
    title: 'High Quality & Reliable Service',
    desc: 'We guarantee consistent, high-quality results with reliable scheduling and transparent pricing.',
  },
  {
    icon: Headphones,
    title: 'Customer Service & Expert Advice',
    desc: 'Our friendly team provides expert guidance to help you choose the right service for your needs.',
  },
]

export function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-5/12">
            <div
              className="h-80 bg-cover bg-center rounded"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/powerwash-about/600/500)',
              }}
            />
          </div>
          <div className="w-full md:w-7/12 pt-4">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-brand-100 text-brand-500 flex items-center justify-center">
                    <f.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-dark-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
