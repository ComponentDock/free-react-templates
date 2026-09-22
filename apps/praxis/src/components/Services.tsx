import { Sparkles, Heart, Scissors, Syringe, Stethoscope, Smile } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Facial Rejuvenation',
    text: 'Restore youthful glow with advanced facelift techniques and minimally invasive treatments.',
  },
  {
    icon: Heart,
    title: 'Breast Augmentation',
    text: 'Enhance your silhouette with natural-looking results using premium implants.',
  },
  {
    icon: Scissors,
    title: 'Rhinoplasty',
    text: 'Reshape and refine your nose for balanced facial harmony and improved breathing.',
  },
  {
    icon: Syringe,
    title: 'Injectable Treatments',
    text: 'Botox, fillers, and skin boosters for smooth, refreshed skin without surgery.',
  },
  {
    icon: Stethoscope,
    title: 'Body Contouring',
    text: 'Liposuction and tummy tuck procedures to sculpt your ideal body shape.',
  },
  {
    icon: Smile,
    title: 'Smile Makeover',
    text: 'Comprehensive dental and facial aesthetic treatments for a confident smile.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-coral-400">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-coral-100">
                <Icon className="h-6 w-6 text-coral-500" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
