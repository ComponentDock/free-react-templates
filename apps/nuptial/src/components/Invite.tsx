import { Flower2 } from 'lucide-react'

export function Invite() {
  return (
    <section
      id="groom-bride"
      className="bg-white py-16 transition-colors dark:bg-gray-950 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img
          src="https://picsum.photos/seed/nuptial-2/900/700"
          alt="The happy couple sharing a smile"
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold tracking-[0.25em] text-pink-500 uppercase">
            Join us to celebrate the wedding day of
          </p>
          <h2 className="mt-4 font-script text-5xl leading-tight text-pink-500 sm:text-6xl">
            Francisco &amp; Laura
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3 text-pink-500 lg:justify-start">
            <span className="h-px w-8 bg-pink-200" aria-hidden="true" />
            <Flower2 className="h-5 w-5" aria-hidden="true" />
            <span className="h-px w-8 bg-pink-200" aria-hidden="true" />
          </div>
          <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-stone-400 uppercase">
            Which is celebration on
          </p>
          <p className="mt-3 font-serif text-4xl text-stone-500 sm:text-5xl">Dec | 28 | 2019</p>
          <p className="mt-4 text-xs font-semibold tracking-[0.25em] text-stone-400 uppercase">
            Starting at 2:00 in the afternoon
          </p>
          <p className="mt-2 text-sm font-medium text-stone-500">
            Saint John Paul Church in YorkNew.in
          </p>
        </div>
      </div>
    </section>
  )
}
