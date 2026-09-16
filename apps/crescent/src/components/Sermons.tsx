import { Video, Headphones, FileText, Download } from 'lucide-react'

const SERMONS = [
  {
    title: 'Start a New Way of Living',
    speaker: 'Jorge Malone',
    categories: 'God, Pray',
    date: '10',
    month: 'MAR',
    time: 'March 10 on 9:00 am - 11:00 am',
    image: 'https://picsum.photos/seed/crescent-sermon1/400/300',
  },
  {
    title: 'What Must I Do To Be Saved',
    speaker: 'Jorge Malone',
    categories: 'God, Pray',
    date: '11',
    month: 'MAY',
    time: 'March 11 on 10:00 am - 11:00 am',
    image: 'https://picsum.photos/seed/crescent-sermon2/400/300',
  },
  {
    title: 'The Second Coming of Christ',
    speaker: 'Jorge Malone',
    categories: 'God, Pray',
    date: '15',
    month: 'MAY',
    time: 'March 10 on 9:00 am - 11:00 am',
    image: 'https://picsum.photos/seed/crescent-sermon3/400/300',
  },
]

const MEDIA_ICONS = [
  { Icon: Video, label: 'Video' },
  { Icon: Headphones, label: 'Audio' },
  { Icon: FileText, label: 'Docs' },
  { Icon: Download, label: 'Download' },
]

export function Sermons() {
  return (
    <section className="bg-white py-20 md:py-24" id="sermons" data-testid="sermons">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase text-brand-dark md:text-3xl">
            Latest Sermons
          </h2>
          <p className="mx-auto max-w-2xl text-base text-body-text">
            Loaded with fast-paced worship, activities, and video teachings to address real issues
            that students face each day.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {SERMONS.map((sermon) => (
            <div key={sermon.title} className="pb-10">
              <div className="relative mb-4">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-brand px-3 py-1.5 text-center text-white">
                  <h6 className="text-xs leading-tight">
                    <span className="text-lg font-bold">{sermon.date}</span>
                    <br />
                    {sermon.month}
                  </h6>
                </div>
              </div>
              <div className="flex gap-3 pb-3">
                {MEDIA_ICONS.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="text-muted-text transition-colors hover:text-brand"
                    aria-label={item.label}
                    title={item.label}
                  >
                    <item.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <h4 className="mb-3 text-lg font-bold text-brand-dark">{sermon.title}</h4>
              <div className="space-y-1 text-sm text-body-text">
                <p>
                  Sermon From: <span className="font-semibold">{sermon.speaker}</span>
                </p>
                <p>
                  Categories: <span className="font-semibold">{sermon.categories}</span>
                </p>
                <p>{sermon.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
