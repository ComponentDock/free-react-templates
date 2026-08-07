import { ButtonLink } from '@free-react-templates/ui'

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const
const calendarDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const events = ['New subpage for Janet', 'Catch up with Tom', 'Lunch with Diane']

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand to-grape text-white"
    >
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1), transparent 45%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-28 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]">
            Eye catching design &amp; sleek aesthetics
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-purple-100">
            This app does everything you could possibly want it to do and not only that, it is
            beautifully designed and extremely intuitive to use.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink
              href="#features"
              className="rounded bg-punch px-7 py-3 text-sm font-semibold text-white transition-colors hover:brightness-95"
            >
              Buy now
            </ButtonLink>
            <ButtonLink
              href="#about"
              className="rounded border border-white/80 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              More info
            </ButtonLink>
          </div>
        </div>

        <div
          data-testid="phone-mockup"
          className="mx-auto w-full max-w-[300px] rounded-[2.5rem] border-8 border-gray-900 bg-white p-3 shadow-2xl"
        >
          <div className="rounded-[1.8rem] bg-gray-50 p-4 text-gray-900">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">
                Good Morning!
                <span
                  className="ml-1.5 inline-block h-2 w-2 rounded-full bg-punch"
                  aria-hidden="true"
                />
              </p>
              <img
                src="https://picsum.photos/seed/wordpressapp-avatar/64/64"
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-xs font-bold tracking-wide text-gray-500">
              FEBRUARY
            </p>
            <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400">
              {weekDays.map((day, index) => (
                <span key={index}>{day}</span>
              ))}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-1 text-center text-[10px] font-medium">
              {calendarDays.map((day) => (
                <span
                  key={day}
                  className={
                    day === 14
                      ? 'rounded-full bg-punch px-1 py-0.5 text-white'
                      : 'rounded-full px-1 py-0.5'
                  }
                >
                  {day}
                </span>
              ))}
            </div>
            <ul className="mt-4 space-y-2">
              {events.map((event) => (
                <li key={event} className="flex items-center gap-2 text-[11px] text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                  {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1440 80"
        className="absolute bottom-0 left-0 h-16 w-full text-white"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,48 C240,96 480,0 720,24 C960,48 1200,72 1440,32 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  )
}
