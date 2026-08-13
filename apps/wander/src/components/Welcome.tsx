import { Play } from 'lucide-react'
import { welcome } from '../data'

/* Reference: section#next-section — white split row: fluid image left,
   text right (pl-lg-5) with a 32px Abril Fatface heading, two body
   paragraphs and a "Watch The Video" play link (50px circle, 2px #E6E6E6
   border, darkens on hover). */
export function Welcome() {
  return (
    <section id="welcome" aria-label="Welcome" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={welcome.photo} alt={welcome.alt} className="h-auto w-full" loading="lazy" />
          <div className="lg:pl-10">
            <h2 className="text-[32px] text-ink">{welcome.heading}</h2>
            {welcome.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-5">
                {paragraph}
              </p>
            ))}
            <a href="#video" className="group mt-8 inline-flex items-center gap-4">
              <span className="grid h-[50px] w-[50px] place-items-center rounded-full border-2 border-[#e6e6e6] transition-colors group-hover:border-[#1a1a1a]">
                <Play className="ml-0.5 h-4 w-4 text-ink" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.1em] text-ink">
                {welcome.videoLabel}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
