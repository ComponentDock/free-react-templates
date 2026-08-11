import { Play } from 'lucide-react'
import { ABOUT_PARAGRAPH, ABOUT_SCRIPT, ABOUT_TITLE, ABOUT_VIDEO_LABEL } from '../data'
import { SectionHeading } from './SectionHeading'

/* .ftco-intro (about) — centered block: script "About" + H2 50px/900,
   lorem paragraph, and a 90px orange video-play circle with
   margin-bottom:-45px so it overlaps the counter section's top edge. */
export function About() {
  return (
    <section id="about" className="px-4 pt-28 pb-0 text-center">
      <SectionHeading script={ABOUT_SCRIPT} title={ABOUT_TITLE} />
      <p className="mx-auto max-w-[640px] text-[17px] leading-8 text-body">{ABOUT_PARAGRAPH}</p>

      <button
        type="button"
        aria-label={ABOUT_VIDEO_LABEL}
        className="relative -mb-[45px] mt-10 flex h-[90px] w-[90px] cursor-pointer items-center justify-center rounded-full bg-brand text-white shadow-[0_0_34px_-8px_rgba(0,0,0,.1)] transition-transform hover:scale-105"
      >
        <Play aria-hidden="true" className="ml-1 h-8 w-8 fill-current" />
      </button>
    </section>
  )
}
