import { Church } from 'lucide-react'

export function DailyVerse() {
  return (
    <section aria-label="Daily verse" className="relative overflow-hidden bg-gray-900 py-24">
      <img
        src="https://picsum.photos/id/299/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold text-gold">
          <Church className="h-9 w-9" aria-hidden="true" />
        </span>
        <span className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-gold sm:text-sm">
          Jesus Christ Said:
        </span>
        <h3 className="mt-5 font-serif text-2xl font-medium leading-relaxed text-white sm:text-3xl">
          &ldquo;For God so loved the world, that he gave his only begotten Son, that whosoever
          believeth in him should not perish, but have everlasting life.&rdquo;
        </h3>
        <p className="mt-6 text-sm font-semibold text-gray-300">
          <span className="text-gold">Bible:</span> John 3:16 KJV
        </p>
      </div>
    </section>
  )
}
