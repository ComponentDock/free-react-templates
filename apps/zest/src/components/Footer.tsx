export function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-10 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <p className="text-sm font-light text-mist dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Zest. All rights reserved.
        </p>
        <p className="text-sm font-light text-mist dark:text-gray-400">
          Inspired by ColorLib&apos;s Zeedapp template.
        </p>
      </div>
    </footer>
  )
}
