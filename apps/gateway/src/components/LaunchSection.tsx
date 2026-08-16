interface LaunchSectionProps {
  onLaunch: () => void
}

export function LaunchSection({ onLaunch }: LaunchSectionProps) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="flex w-full max-w-md flex-col items-center text-center">
        <h1 className="mb-2 text-2xl font-normal text-navy">Gateway</h1>
        <button
          type="button"
          onClick={onLaunch}
          className="cursor-pointer rounded-[4px] border border-brand bg-brand px-6 py-4 text-[15px] text-white transition-colors hover:bg-transparent hover:text-brand"
        >
          Launch Signup
        </button>
      </div>
    </section>
  )
}
