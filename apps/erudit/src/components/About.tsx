import { useEffect, useState } from 'react'

interface CounterProps {
  to: number
  label: string
}

function Counter({ to, label }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const step = Math.ceil(to / (duration / 30))
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + step >= to) {
          clearInterval(timer)
          return to
        }
        return prev + step
      })
    }, 30)
    return () => clearInterval(timer)
  }, [to])

  return (
    <div className="text-center">
      <span className="text-3xl font-bold text-sky-500">{count.toLocaleString()}</span>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Images */}
        <div className="relative h-80">
          <img
            src="https://picsum.photos/seed/erudit-about1/500/400"
            alt="Students learning"
            className="absolute top-0 left-0 w-3/5 h-3/5 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://picsum.photos/seed/erudit-about2/400/300"
            alt="Classroom"
            className="absolute bottom-0 right-0 w-3/5 h-3/5 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text + Counters */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Are We</h2>
          <p className="text-gray-600 mb-2 font-medium">
            Even the all-powerful Pointing has no control about the blind texts.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life. One day however a small line of blind text by the name of Lorem
            Ipsum decided to leave for the far World of Grammar.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <Counter to={1539} label="Courses" />
            <Counter to={3653} label="Students" />
            <Counter to={2300} label="Teachers online" />
            <Counter to={200} label="Countries" />
          </div>
        </div>
      </div>
    </section>
  )
}
