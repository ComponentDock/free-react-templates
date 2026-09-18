import { Link2, FileArchive, Headphones, Download } from 'lucide-react'
import { sermon } from '../data'

export function Sermon() {
  return (
    <section id="sermons" className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="block font-display text-lg font-bold italic text-brand">
            {sermon.kicker}
          </span>
          <h2 className="mt-2 text-4xl font-bold uppercase text-ink">{sermon.heading}</h2>
        </div>
        <div
          className="relative rounded bg-cover bg-center"
          style={{ backgroundImage: `url('${sermon.image}')` }}
        >
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative z-10 ml-auto max-w-lg p-12 text-white">
            <h3 className="text-2xl font-bold">{sermon.title}</h3>
            <ul className="mt-4 space-y-1 text-sm">
              {sermon.info.map((item) => (
                <li key={item.value}>
                  {item.label && <span className="font-semibold">{item.label} </span>}
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
            {sermon.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-sm text-white/90">
                {p}
              </p>
            ))}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Link"
                className="text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Link2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Archive"
                className="text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FileArchive className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Listen"
                className="text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Headphones className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Download"
                className="text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
