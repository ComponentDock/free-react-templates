import { CLIENT_NAMES, CLIENTS_CAPTION, CLIENTS_TITLE } from '../data'
import { SectionTitle } from './SectionTitle'

/* .client_part — centered "Who Donate us" title + one-liner + logo row
   (source: owl-carousel of 5 client logos → styled text wordmarks,
   wrapping on mobile). */
export function Clients() {
  return (
    <section
      aria-label="Clients"
      className="bg-white px-4 pt-[70px] pb-[140px] max-[991px]:pb-[70px]"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={CLIENTS_TITLE} caption={CLIENTS_CAPTION} centered />

        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {CLIENT_NAMES.map((name) => (
            <li
              key={name}
              className="text-[24px] font-bold tracking-wide text-gray-400 transition-colors hover:text-brand"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
