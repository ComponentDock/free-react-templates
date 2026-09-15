import { Eye, Settings, Music, Search, Monitor, Tablet, Printer, Wand2, Video } from 'lucide-react'

const processItems = [
  {
    icon: Eye,
    title: 'Life Advice Looking Through',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Settings,
    title: 'Dealing With Technical',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Music,
    title: 'What Is HDCP',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Search,
    title: 'Finding Information Online',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Monitor,
    title: 'Sony Laptops Are Still Part',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Tablet,
    title: 'Purchase Desktop Computers',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Printer,
    title: 'The Best Photo Printer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Wand2,
    title: 'FTA Keys',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Video,
    title: 'How Does An LCD Screen Work',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {processItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brio-pink/10">
                <item.icon className="text-brio-pink" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-brio-dark">{item.title}</h3>
              <p className="text-sm text-brio-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
