import { DayNightToggle } from './DayNightToggle'

export function DemoSection() {
  return (
    <section className="px-4 py-[112px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h1 className="mb-4 text-[28px] font-normal text-black dark:text-white">Toggle #08</h1>
        <h5 className="mb-10 text-[18px] text-black/50 dark:text-white/50">
          Day &amp; Night Switch Toggle
        </h5>
        <div className="flex flex-col items-center gap-6">
          <DayNightToggle label="Day/Night toggle 1" />
          <DayNightToggle defaultChecked label="Day/Night toggle 2" />
        </div>
      </div>
    </section>
  )
}
