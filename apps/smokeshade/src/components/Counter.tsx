import { useEffect, useState } from 'react'

const counters = [
  { label: 'Successful projects', target: 350 },
  { label: 'Events', target: 120 },
]

function useCountUp(target: number) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame = 0
    const totalFrames = 60
    const tick = () => {
      frame++
      setCount(Math.floor((frame / totalFrames) * target))
      if (frame < totalFrames) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [target])

  return count
}

function CounterItem({ label, target }: { label: string; target: number }) {
  const count = useCountUp(target)
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#e32879] text-[#e32879]">
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </div>
      <div>
        <p className="text-3xl font-bold text-white">{count}+</p>
        <p className="text-[#b3b3b3]">{label}</p>
      </div>
    </div>
  )
}

export function Counter() {
  return (
    <section className="bg-[#222222] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:px-8">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-white">We have a lot of experience</h2>
          <a
            href="#"
            className="inline-block rounded-full bg-[#e32879] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c41f65]"
          >
            Read More
          </a>
        </div>
        <div className="flex flex-col gap-8">
          {counters.map((c) => (
            <CounterItem key={c.label} label={c.label} target={c.target} />
          ))}
        </div>
      </div>
    </section>
  )
}
