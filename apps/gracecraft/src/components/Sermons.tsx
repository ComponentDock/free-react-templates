import { Link, FileText, Share2, Download } from 'lucide-react'

interface SermonData {
  title: string
  pastor: string
  categories: string[]
  image: string
}

const sermons: SermonData[] = [
  {
    title: 'Sermons on Prayer: Running Well, Finishing Strong',
    pastor: 'Josh Brighton',
    categories: ['God', 'Prayer'],
    image: 'https://picsum.photos/seed/gracecraft-sermon1/400/250',
  },
  {
    title: 'Sermons on Faith: A Life Worth Living, A New Purpose',
    pastor: 'Julia Amber',
    categories: ['God', 'Faith'],
    image: 'https://picsum.photos/seed/gracecraft-sermon2/400/250',
  },
  {
    title: 'Sermons for Communion Services: Come to the Table',
    pastor: 'Ashley Young',
    categories: ['God', 'Communion'],
    image: 'https://picsum.photos/seed/gracecraft-sermon3/400/250',
  },
]

export function Sermons() {
  return (
    <section id="sermons" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-ink">Sermons today</h2>
          <p className="mt-3 text-mist">Our lives in praising God</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {sermons.map((sermon) => (
            <div key={sermon.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={sermon.image}
                alt={sermon.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-brand">
                  <a href="#" className="hover:text-brand-dark">
                    {sermon.title}
                  </a>
                </h3>
                <div className="mt-4 text-sm text-mist">
                  <p>
                    <span className="font-semibold">Pastor: </span>
                    {sermon.pastor}
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold">Categories: </span>
                    {sermon.categories.join(', ')}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-center gap-4 text-mist">
                  <a href="#" aria-label="Link" className="transition-colors hover:text-brand">
                    <Link className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="PDF" className="transition-colors hover:text-brand">
                    <FileText className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Share" className="transition-colors hover:text-brand">
                    <Share2 className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Download" className="transition-colors hover:text-brand">
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
