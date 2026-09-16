import { Countdown } from './Countdown'

interface LeftPanelProps {
  targetDate: Date
}

export function LeftPanel({ targetDate }: LeftPanelProps) {
  return (
    <section
      className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-cover bg-center md:absolute md:w-1/2"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/imminence-countdown/1200/1200')`,
      }}
      aria-label="Countdown background"
    >
      <Countdown targetDate={targetDate} />
    </section>
  )
}
