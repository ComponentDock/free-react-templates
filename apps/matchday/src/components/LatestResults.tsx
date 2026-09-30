import { results } from '../data'
import { SectionTitle } from './SectionTitle'
import { TemplateButton } from './TemplateButton'

/** Latest results: centered heading + two mirrored photo/score blocks with a
 *  thin vertical divider and the brand See More Info button. */
export function LatestResults() {
  const [first, second] = results.blocks

  return (
    <section id="results" className="bg-white py-[92px]">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionTitle title={results.title} subtitle={results.subtitle} />
        <p className="mt-2 text-center text-sm text-[#888888]">{results.league}</p>

        <div className="mt-12 flex flex-col items-stretch gap-10 md:flex-row md:items-end">
          <div className="flex flex-1 flex-col items-center text-center">
            <img
              src={first!.image}
              alt="The Ravens celebrating"
              className="h-[262px] w-full max-w-[262px] object-cover"
            />
            <p className="mt-6 text-[72px] font-bold leading-none text-ink">{first!.score}</p>
            <h3 className="mt-2 text-4xl font-bold text-[#888888]">{first!.team}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">{first!.blurb}</p>
          </div>

          <div className="mx-auto hidden h-[264px] w-0.5 shrink-0 bg-[#dddfe2] md:block" />

          <div className="flex flex-1 flex-col items-center text-center">
            <img
              src={second!.image}
              alt="The Lions in action"
              className="h-[262px] w-full max-w-[262px] object-cover"
            />
            <p className="mt-6 text-[72px] font-bold leading-none text-ink">{second!.score}</p>
            <h3 className="mt-2 text-4xl font-bold text-[#888888]">{second!.team}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">{second!.blurb}</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <TemplateButton href="#results">See More Info</TemplateButton>
        </div>
      </div>
    </section>
  )
}
