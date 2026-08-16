import { cn } from '@free-react-templates/ui'
import { classItems } from '../data'

/* Six workout-class cards. Each card hides a red $100 price badge that
   slides in on hover, and a red-on-dark title band that inverts to red
   with white text on hover. */
export function Classes() {
  return (
    <section
      id="classes"
      aria-label="Workout classes"
      className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
    >
      <div className="text-center">
        <span className="text-[13px] font-bold uppercase tracking-wide text-primary">
          Our Classes
        </span>
        <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-heading lg:text-[34px]">
          Kinesis Workout Classes
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {classItems.map((item) => (
          <article key={item.title} className="group relative overflow-hidden">
            <div className="h-[350px] overflow-hidden">
              <img
                src={item.image}
                alt={`${item.title} class`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span
              className={cn(
                'absolute right-[-100px] top-10 bg-primary px-5 py-1.5 font-display text-xl font-extrabold italic text-white transition-all duration-300',
                'group-hover:right-5',
                'before:absolute before:-left-2.5 before:top-0 before:h-full before:w-5 before:bg-blue before:[transform:skew(-20deg)]',
              )}
            >
              {item.price}
            </span>
            <h3
              className={cn(
                'absolute bottom-0 left-0 bg-ink px-8 py-2.5 font-display text-[26px] font-black italic uppercase text-primary transition-colors',
                'after:absolute after:right-[-40px] after:top-0 after:h-full after:w-10 after:bg-ink after:[transform:skew(20deg)] after:transition-colors',
                'group-hover:bg-primary group-hover:text-white group-hover:after:bg-primary',
              )}
            >
              {item.title}
            </h3>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#classes"
          className="inline-block text-[13px] font-bold uppercase tracking-[3px] text-primary transition-colors hover:text-blue"
        >
          View All Classes
        </a>
      </div>
    </section>
  )
}
