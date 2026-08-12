import { INTRO_PANELS } from '../data'

/**
 * IntroPanels — three equal solid-color panels (dark grey / orange /
 * deep red) with an inset 2px white frame, uppercase white Anton
 * headings, and muted paragraphs. Stacks vertically on mobile.
 */
export function IntroPanels() {
  return (
    <section aria-label="How you can help" className="flex flex-col md:flex-row">
      {INTRO_PANELS.map((panel) => (
        <div key={panel.heading} className={`flex-1 p-5 ${panel.bgClass}`}>
          <div className="flex h-full flex-col justify-center border-2 border-white/50 px-6 py-10 text-center md:px-10 md:py-14">
            <h2 className="font-display text-2xl uppercase tracking-[0.15em] text-white">
              {panel.heading}
            </h2>
            <p className="mt-4 text-white/50">{panel.body}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
