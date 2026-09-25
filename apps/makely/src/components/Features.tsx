import { CheckCircle } from 'lucide-react'

const features = [
  {
    number: '01',
    title: 'Innovate',
    description: 'We push boundaries with innovative solutions that create meaningful impact.',
    items: ['Customer Experience', 'Product Management', 'Proof of Concept'],
  },
  {
    number: '02',
    title: 'Create',
    description: 'From concept to reality, we craft beautiful and functional digital products.',
    items: ['Web Design', 'Branding', 'Web & App Development'],
  },
  {
    number: '03',
    title: 'Scale',
    description: 'We help your business grow with strategic marketing and optimization.',
    items: ['Social Media', 'Paid Campaigns', 'Marketing & SEO'],
  },
]

export function Features() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.number} className="text-center">
              <span className="text-7xl font-bold text-gray-200 mb-4 block">{feature.number}</span>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-makely-body mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-center gap-2 text-makely-body"
                  >
                    <CheckCircle size={18} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
