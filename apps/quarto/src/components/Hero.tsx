import { heroIntro, person } from '../content'
import { NotebookNote } from './NotebookNote'

export function Hero() {
  return (
    <section className="q-hero">
      <div className="grid grid-cols-1 min-[992px]:-mx-6 min-[992px]:grid-cols-12 min-[992px]:items-center">
        <div className="min-[992px]:col-span-8 min-[992px]:px-6">
          <span className="mb-8 inline-flex items-center gap-2 text-[0.75rem] text-green">
            <span aria-hidden="true" className="size-[7px] rounded-full bg-green" />
            {person.availability}
          </span>

          <h1 className="q-h1 mb-[27px] max-w-[760px]">
            Curious mind.
            <br />
            Work <em className="font-serif font-normal italic">in progress.</em>
          </h1>

          <p className="max-w-[440px] text-[1.08rem] text-muted max-[991px]:max-w-[600px]">
            {heroIntro}
          </p>

          <div className="mt-[30px] flex flex-wrap gap-3">
            <a href="#work" className="q-btn">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <button type="button" className="q-btn q-btn-outline">
              Meet the person behind it <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>

        <div className="min-[992px]:col-span-4 min-[992px]:px-6">
          <NotebookNote />
        </div>
      </div>
    </section>
  )
}
