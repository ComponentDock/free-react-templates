import { Download, Play } from 'lucide-react'
import { sermon, sectionLabels } from '../data'
import { SectionHeading } from './SectionHeading'

export function Sermons() {
  return (
    <section id="sermons" className="bg-section-bg py-20">
      <div className="mx-auto max-w-[1250px] px-4">
        <SectionHeading label={sectionLabels.sermonSub} heading={sectionLabels.sermonHeading} />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={sermon.image}
            alt="Sermon illustration"
            className="h-[320px] w-full object-cover"
          />
          <div className="py-4">
            <h3 className="mb-3 font-heading text-2xl font-medium text-black">
              <a href="#" className="transition-colors hover:text-brand">
                {sermon.title}
              </a>
            </h3>
            <p className="mb-4 text-sm text-body">{sermon.meta}</p>
            <p className="mb-6 text-base leading-[1.8] text-body">{sermon.body}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#sermons"
                className="inline-flex items-center gap-2 rounded-[3px] border border-brand bg-brand px-5 py-3 text-sm text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                {sermon.watchLabel}
              </a>
              <a
                href="#sermons"
                className="inline-flex items-center gap-2 rounded-[3px] border border-black bg-black px-5 py-3 text-sm text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {sermon.downloadLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
