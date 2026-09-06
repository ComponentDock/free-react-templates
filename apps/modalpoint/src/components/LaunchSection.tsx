interface LaunchSectionProps {
  onOpenModal: () => void
}

export function LaunchSection({ onOpenModal }: LaunchSectionProps) {
  return (
    <section className="flex min-h-[100vh] flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">Registration Modal</h1>
      <button
        onClick={onOpenModal}
        className="rounded bg-[#6c757d] px-6 py-4 font-medium text-white transition-colors hover:bg-[#5a6268] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      >
        Launch modal
      </button>
    </section>
  )
}
