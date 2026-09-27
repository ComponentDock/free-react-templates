import { PenTool, Share2, Palette, Megaphone, Mail, Globe } from 'lucide-react'

const serviceItems = [
  {
    icon: PenTool,
    title: 'Content Marketing',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Palette,
    title: 'Brand & Logo Design',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Megaphone,
    title: 'Social Media Advertising',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Globe,
    title: 'Web Design & Development',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-black">Services</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {serviceItems.map((item) => (
            <div key={item.title} className="flex gap-4 rounded bg-white p-6 shadow-sm">
              <item.icon size={40} className="shrink-0 text-lime-400" />
              <div>
                <h3 className="mb-2 text-lg font-bold text-black">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
