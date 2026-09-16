import { verse } from '../data'

export function DailyVerse() {
  return (
    <section className="bg-light-bg py-20 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-4 text-4xl text-brand">&ldquo;</div>
        <blockquote className="font-verse text-xl italic leading-relaxed text-ink sm:text-2xl">
          {verse.text}
        </blockquote>
        <p className="mt-6 font-verse text-base text-body">— {verse.attribution}</p>
      </div>
    </section>
  )
}
