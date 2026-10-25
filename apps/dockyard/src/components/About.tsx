import { about } from '../data'
import { Counters } from './Counters'
import { Reveal } from './Reveal'
import { VideoFigure } from './VideoFigure'

/**
 * One `#about` target (the reference carried the id twice, so its nav anchor landed on the heading
 * only): the white heading band, then the video figure and the counters on the warm grey band.
 */
export function About() {
  return (
    <section id="about" aria-label="About Dockyard">
      <div className="bg-white pt-[5em] pb-[12em]">
        <Reveal className="mx-auto max-w-[1140px] px-4">
          <div className="mx-auto max-w-[66%] text-center">
            <h2 className="text-[32px] font-medium text-brand normal-case lg:text-[48px]">
              {about.heading}
            </h2>
            <p className="mt-4 text-[16px] text-body">{about.blurb}</p>
          </div>
        </Reveal>
      </div>

      <div className="bg-surface pb-[5em]">
        <VideoFigure />
        <Counters />
      </div>
    </section>
  )
}
