import { Compass, Code, Palette, MessageSquare } from 'lucide-react'

const items = [
  {
    icon: Compass,
    title: 'Strategy',
    description:
      'We develop comprehensive strategies that align with your business goals and drive measurable results.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'We build fast, scalable, and maintainable web applications using modern technologies.',
  },
  {
    icon: Palette,
    title: 'Art Direction',
    description: 'We create compelling visual identities that capture the essence of your brand.',
  },
  {
    icon: MessageSquare,
    title: 'Copywriting',
    description:
      'We craft persuasive copy that communicates your message and resonates with your audience.',
  },
]

export function AboutDark() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://picsum.photos/seed/makely-about-dark/800/600"
              alt="About our agency"
              className="rounded-lg w-full"
            />
          </div>
          <div className="space-y-8">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon size={32} className="text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-2">{item.description}</p>
                  <a
                    href="#"
                    className="text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
