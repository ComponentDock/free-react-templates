import { Download } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { Counter } from './Counter'
import { aboutDetails, aboutParagraph } from '../data'

export function About() {
  return (
    <section id="about-section" aria-label="About me" className="py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/showcase-about/600/650"
              alt="Portrait of Alex Rivera"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Counter value={120} label="Project complete" />
            <Button className="px-6">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-[42px] font-semibold text-heading">About Me</h2>
          <p className="mt-6 leading-relaxed text-muted">{aboutParagraph}</p>
          <dl className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {aboutDetails.map((row) => (
              <div key={row.label} className="flex gap-2">
                <dt className="font-semibold text-heading">{row.label}:</dt>
                <dd className="text-value">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
