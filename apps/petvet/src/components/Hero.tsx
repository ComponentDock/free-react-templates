import { Phone } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper dark:bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/petvet-hero/1600/800"
          alt=""
          className="h-full w-full object-cover opacity-20 dark:opacity-10"
          fetchPriority="high"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 md:py-36">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">Petvet Pet Care</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black text-gray-900 sm:text-5xl dark:text-white">
          The Kind of Care Your Pets Deserve
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#contact"
            className="rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-strong"
          >
            Make An Appointment
          </a>
          <a
            href="tel:+1123456789102"
            className="flex items-center gap-2 text-sm font-bold text-gray-700 transition-colors hover:text-brand dark:text-gray-200"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            11-234-5678-9102
          </a>
        </div>
      </div>
    </section>
  )
}
