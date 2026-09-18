import { Pickaxe, Gem, Truck, Factory, Hammer, Flame } from 'lucide-react'

const features = [
  {
    icon: Pickaxe,
    title: 'Surface Mining',
    description: 'Advanced open-pit and strip mining techniques for maximum resource extraction.',
  },
  {
    icon: Gem,
    title: 'Gold Nuggets',
    description: 'Expert gold prospecting and extraction using state-of-the-art recovery systems.',
  },
  {
    icon: Truck,
    title: 'Soil Carrier',
    description: 'Reliable soil transportation and material logistics across all project sites.',
  },
  {
    icon: Factory,
    title: 'Gold Refinery',
    description: 'Precision refining processes that deliver pure, investment-grade gold products.',
  },
  {
    icon: Hammer,
    title: 'Anvil Blacksmith',
    description: 'Traditional and modern metalwork crafting for industrial mining equipment.',
  },
  {
    icon: Flame,
    title: 'Gold Melt Crucible',
    description: 'High-temperature crucible melting for smelting and alloying operations.',
  },
]

export function FeaturesGrid() {
  return (
    <section className="bg-[#f8f9fa] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mb-4 flex justify-center">
                <feature.icon className="w-10 h-10 text-[#ff8b00]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading uppercase text-black mb-3">{feature.title}</h3>
              <p className="text-[#939393]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
