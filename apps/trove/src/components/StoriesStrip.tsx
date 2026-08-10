import { stories } from '../data'

export function StoriesStrip() {
  return (
    <section aria-label="Top stories" className="border-b border-gray-100 bg-white">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:grid-cols-6">
        {stories.map((story, index) => (
          <li
            key={story.seed}
            className={
              index < stories.length - 1
                ? 'border-r border-indigo-deep/15 px-5 first:pl-0 last:border-r-0'
                : 'px-5 first:pl-0'
            }
          >
            <a href="#home" className="group flex items-center gap-3">
              <img
                src={`https://picsum.photos/seed/${story.seed}/120/90`}
                alt=""
                loading="lazy"
                className="h-[60px] w-20 shrink-0 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <h3 className="font-display text-sm leading-snug font-medium text-gray-800 transition-colors group-hover:text-brand">
                  {story.title}
                </h3>
                <p className="mt-1 text-[11px] tracking-widest text-muted uppercase">
                  {story.date}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
