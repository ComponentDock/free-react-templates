import { Palette, Search, Globe, Mail, Code, Target } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Custom design',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
  },
  {
    icon: Search,
    title: 'Paid Search result',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
  },
  {
    icon: Globe,
    title: 'Global Search option',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
  },
  {
    icon: Target,
    title: 'Setup business goal',
    description: 'Esteem spirit temper too say adieus who direct esteem.',
  },
]

export function Features() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4 leading-tight">
            We have some awesome features to rank your business
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture
            placing drawing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-brand-purple rounded-full flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-brand-pink" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
