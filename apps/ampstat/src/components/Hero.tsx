import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [selectedEvent, setSelectedEvent] = useState('')
  const [ticketCount, setTicketCount] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const events = ['Summer Festival', 'Winter Concert', 'Spring Tour'] as const

  return (
    <section data-testid="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/ampstat-hero/1920/1080')` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-8">
          your <span className="text-brand-yellow-light">music.</span>
        </h1>

        {/* Ticket form */}
        <form
          data-testid="ticket-form"
          className="flex flex-col md:flex-row items-center gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex items-center gap-2">
            {/* Custom dropdown */}
            <div className="relative">
              <button
                type="button"
                data-testid="event-dropdown"
                className="w-48 h-14 px-4 bg-white text-text-dark text-sm font-bold rounded-[22px] text-left flex items-center justify-between"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {selectedEvent || 'Event'}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showDropdown && (
                <ul
                  data-testid="event-options"
                  className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-20"
                >
                  {events.map((event) => (
                    <li key={event}>
                      <button
                        type="button"
                        className="w-full px-4 py-3 text-left text-sm text-text-dark hover:bg-brand-light transition-colors"
                        onClick={() => {
                          setSelectedEvent(event)
                          setShowDropdown(false)
                        }}
                      >
                        {event}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input
              type="text"
              data-testid="ticket-input"
              placeholder="Tickets"
              value={ticketCount}
              onChange={(e) => setTicketCount(e.target.value)}
              className="w-40 h-14 px-4 bg-white text-text-dark text-sm font-bold rounded-[22px] placeholder:text-text-light"
            />
          </div>

          <button
            type="submit"
            data-testid="ticket-button"
            className="w-[200px] h-14 bg-brand-green text-white text-sm font-bold uppercase rounded-[22px] hover:bg-brand-green/90 transition-colors"
          >
            get your tickets
          </button>
        </form>
      </div>

      {/* Social sidebar */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
        <span className="text-white text-xs font-bold uppercase tracking-widest [writing-mode:vertical-rl]">
          follow
        </span>
        <div className="flex flex-col gap-3">
          {['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance'].map((name) => (
            <a
              key={name}
              href="#"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold hover:bg-brand-green transition-colors"
              aria-label={name}
            >
              {name[0]}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  )
}
