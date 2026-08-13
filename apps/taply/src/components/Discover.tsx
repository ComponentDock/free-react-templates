import { CalendarClock, MessageCircle, MessagesSquare, Users } from 'lucide-react'
import { checklist } from '../data'

const icons = [Users, CalendarClock, MessagesSquare, MessageCircle] as const

/** White two-column section: "Discover our App" text + Read more link on
 *  the left; "Do more with our app" checklist (Communication, Scheduling,
 *  Messages, Live Chat) on the right. */
export function Discover() {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-medium text-brand-purple lg:text-4xl">Discover our App</h2>
          <p className="mt-5 leading-relaxed text-muted">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem
            eveniet vero maxime ratione.
          </p>
          <a
            href="#features"
            className="mt-6 inline-block rounded bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-xs font-medium uppercase tracking-widest text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Read more
          </a>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-eyebrow">Features</p>
          <h3 className="mt-3 text-2xl font-medium text-brand-purple lg:text-3xl">
            Do more with our app
          </h3>
          <ul className="mt-8 space-y-6">
            {checklist.map((item, index) => {
              // Index is bounded by the checklist length (icons.length).
              const Icon = icons[index]!
              return (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-gradient-to-tr from-brand to-brand-2 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="font-medium text-brand-purple">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted">{item.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
