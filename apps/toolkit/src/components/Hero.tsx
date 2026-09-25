import { CloudDownload } from 'lucide-react'

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-gradient-to-br from-primary-400 to-accent-400 px-6 text-center text-white">
      <h1 className="mb-4 text-5xl font-light md:text-6xl">Tools UI Kit.</h1>
      <p className="mb-8 text-lg opacity-90">Free Bootstrap 4 UI Kit on Tools Design.</p>
      <a
        href="#download"
        className="inline-flex items-center gap-2 rounded border-2 border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-400 transition-colors hover:bg-transparent hover:text-white"
      >
        <CloudDownload className="h-4 w-4" />
        Download Tools
      </a>
    </section>
  )
}
