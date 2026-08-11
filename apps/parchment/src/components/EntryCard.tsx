import { imgUrl, type Entry } from '../data'

interface EntryCardProps {
  entry: Entry
}

/* White centered post card (reference `article.item-entry`): cover
   thumbnail with hover scale, indigo uppercase category link, serif title,
   and the date pinned near the card bottom. */
export function EntryCard({ entry }: EntryCardProps) {
  return (
    <article className="relative overflow-hidden bg-paper text-center shadow-[0_1px_3px_rgba(0,0,0,.12)]">
      <a href="#" className="group block">
        <div className="overflow-hidden">
          <img
            src={imgUrl(entry.seed, 600, 400)}
            alt=""
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="px-6 pt-6 pb-14">
          <p className="mb-5">
            <a
              href="#"
              className="text-sm font-bold tracking-[.25rem] text-link uppercase transition-colors hover:text-ink"
            >
              {entry.category}
            </a>
          </p>
          <h2 className="font-heading text-2xl leading-snug text-ink transition-colors group-hover:text-ink/70">
            {entry.title}
          </h2>
        </div>
      </a>
      <p className="absolute bottom-9 left-0 w-full text-[1.3rem] tracking-[.2rem] text-black/80 uppercase">
        {entry.date}
      </p>
    </article>
  )
}
