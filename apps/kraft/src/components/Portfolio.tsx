import { cn } from '@free-react-templates/ui'
import { outlineBlack } from './buttons'

const workItems = [
  { title: 'Startup Brand', category: 'Business', seed: 'kraft-1' },
  { title: 'Corporate Design', category: 'Design', seed: 'kraft-2' },
  { title: 'Unpacked Branding', category: 'Business', seed: 'kraft-3' },
  { title: 'Rebranding Work', category: 'Business', seed: 'kraft-4' },
] as const

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-light text-black lg:text-5xl">Latest Work</h2>
        <p className="mt-4 text-mist">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <a
          href="#portfolio"
          className="mt-2 inline-block text-brand transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          View All Portfolio
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2">
        {workItems.map((item) => (
          <a
            key={item.title}
            href="#portfolio"
            className="group relative block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <img
              src={`https://picsum.photos/seed/${item.seed}/800/600`}
              alt={item.title}
              className="block w-full border-[10px] border-white object-cover"
              loading="lazy"
            />
            <div
              className={cn(
                'absolute inset-[10px] flex flex-col items-center justify-center bg-black/50 text-center',
                'opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100',
              )}
            >
              <h3 className="text-2xl font-light text-white">{item.title}</h3>
              <p className="mt-1 text-white/50">{item.category}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#portfolio" className={outlineBlack}>
          More Portfolio
        </a>
      </div>
    </section>
  )
}
