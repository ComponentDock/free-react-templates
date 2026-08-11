import { CLIENTS } from '../data'

/* client_logo strip — 5 grayscale logo wordmarks on a light background
   (the source uses logo images; recreated as muted gray text). */
export function ClientLogos() {
  return (
    <section className="bg-mist py-14 dark:bg-ink/90">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 sm:px-6">
        {CLIENTS.map((client) => (
          <span
            key={client}
            className="text-[20px] font-bold tracking-widest text-gray-400 uppercase"
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  )
}
