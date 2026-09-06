interface LaunchSectionProps {
  onLaunch: () => void
}

export function LaunchSection({ onLaunch }: LaunchSectionProps) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Entrywell</h1>
      <button
        onClick={onLaunch}
        className="rounded bg-[#e3b04b] px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#2b2b28] transition-colors hover:bg-transparent hover:text-[#e3b04b] hover:ring-2 hover:ring-[#e3b04b]"
      >
        Launch Modal
      </button>
    </section>
  )
}
