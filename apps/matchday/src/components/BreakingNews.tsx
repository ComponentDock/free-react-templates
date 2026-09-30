import { breakingNews } from '../data'
import { useRotator } from '../useRotator'

/** Breaking-news strip: orange title block + navy rotating headline. */
export function BreakingNews() {
  const index = useRotator(breakingNews, 4000)

  return (
    <section aria-label="Breaking news" className="flex h-[78px] w-full">
      <div className="flex w-[34.48%] items-center justify-center bg-brand px-4">
        <h2 className="text-xl font-medium uppercase text-navy sm:text-[30px]">Breaking News</h2>
      </div>
      <div className="flex w-[65.52%] items-center overflow-hidden bg-navy px-6">
        <p className="truncate font-light text-white sm:text-lg" aria-hidden="true">
          {breakingNews[index]}
        </p>
      </div>
    </section>
  )
}
