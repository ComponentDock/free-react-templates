import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const ACCORDIONS = [
  {
    question: 'Why choose our platform?',
    answer:
      'Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in.',
  },
  {
    question: 'What courses are available?',
    answer:
      'Aenean id varius quam. Nullam bibendum interdum dui, ac tempor lorem convallis ut. Donec vehicula efficitur nibh, in pretium nulla interdum non.',
  },
  {
    question: 'Mauris vehicula nisi congue?',
    answer:
      'Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in.',
  },
  {
    question: 'Nisi congue, blandit purus sed?',
    answer:
      'Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in.',
  },
]

const EVENTS = [
  { day: '20', month: 'April', title: 'New Marketing Course Release', location: 'Online Platform' },
  { day: '23', month: 'April', title: 'Students Art Workshop', location: 'Online Platform' },
  {
    day: '25',
    month: 'April',
    title: 'Launch Party for a new Platform',
    location: 'Online Platform',
  },
  { day: '27', month: 'April', title: 'New Marketing Course', location: 'Online Platform' },
]

export function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Accordion */}
        <div>
          <h2 className="text-3xl font-bold text-dark mb-8">Why Choose Us</h2>
          <div className="space-y-3">
            {ACCORDIONS.map((item, i) => (
              <div key={i} className="border border-gray-200">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-light-bg transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-dark text-sm">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-muted transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4">
                    <p className="text-muted text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div>
          <h2 className="text-3xl font-bold text-dark mb-8">Upcoming Events</h2>
          <div className="space-y-4">
            {EVENTS.map((event) => (
              <div key={event.day + event.month} className="flex items-start gap-4">
                <div className="bg-brand text-white text-center px-4 py-3 min-w-[70px]">
                  <div className="text-2xl font-bold leading-none">{event.day}</div>
                  <div className="text-xs uppercase mt-1">{event.month}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-dark text-sm hover:text-brand transition-colors cursor-pointer">
                    {event.title}
                  </h3>
                  <p className="text-muted-light text-xs mt-1">Location: {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
