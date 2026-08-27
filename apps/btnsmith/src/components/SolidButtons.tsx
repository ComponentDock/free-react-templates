import { useState } from 'react'
import { Check, Copy, ThumbsUp, Trash2, Send, Download } from 'lucide-react'

export function SolidButtons() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (code: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code)
    }
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="solid" className="py-16 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            1. Solid & Filled Buttons
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            Standard solid colored buttons across primary, secondary, tertiary, and quaternary
            variants.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Primary */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Primary (Blue)</h3>
            <div className="mt-6 flex flex-col gap-4">
              <button
                type="button"
                className="w-full rounded-lg bg-[#007bff] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#0069d9]"
              >
                Primary Button
              </button>
              <button
                type="button"
                className="w-full rounded-full bg-[#007bff] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#0069d9]"
              >
                Pill Primary
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#007bff] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#0069d9]"
              >
                <ThumbsUp className="h-4 w-4" /> Like
              </button>
            </div>
            <button
              type="button"
              onClick={() =>
                handleCopy(
                  '<button className="rounded-lg bg-[#007bff] px-5 py-3 text-white">Primary</button>',
                  'primary',
                )
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {copied === 'primary' ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied === 'primary' ? 'Copied!' : 'Copy Snippet'}
            </button>
          </div>

          {/* Secondary */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Secondary (Gray)
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              <button
                type="button"
                className="w-full rounded-lg bg-[#6c757d] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#5a6268]"
              >
                Secondary Button
              </button>
              <button
                type="button"
                className="w-full rounded-full bg-[#6c757d] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#5a6268]"
              >
                Pill Secondary
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6c757d] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#5a6268]"
              >
                <Trash2 className="h-4 w-4" /> Delete
              </button>
            </div>
            <button
              type="button"
              onClick={() =>
                handleCopy(
                  '<button className="rounded-lg bg-[#6c757d] px-5 py-3 text-white">Secondary</button>',
                  'secondary',
                )
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {copied === 'secondary' ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied === 'secondary' ? 'Copied!' : 'Copy Snippet'}
            </button>
          </div>

          {/* Tertiary */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tertiary (Gold)</h3>
            <div className="mt-6 flex flex-col gap-4">
              <button
                type="button"
                className="w-full rounded-lg bg-[#e2c275] px-5 py-3 text-sm font-semibold text-gray-900 shadow-md transition-colors hover:bg-[#d9af4b]"
              >
                Tertiary Button
              </button>
              <button
                type="button"
                className="w-full rounded-full bg-[#e2c275] px-5 py-3 text-sm font-semibold text-gray-900 shadow-md transition-colors hover:bg-[#d9af4b]"
              >
                Pill Tertiary
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e2c275] px-5 py-3 text-sm font-semibold text-gray-900 shadow-md transition-colors hover:bg-[#d9af4b]"
              >
                <Send className="h-4 w-4" /> Send
              </button>
            </div>
            <button
              type="button"
              onClick={() =>
                handleCopy(
                  '<button className="rounded-lg bg-[#e2c275] px-5 py-3 text-gray-900">Tertiary</button>',
                  'tertiary',
                )
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {copied === 'tertiary' ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied === 'tertiary' ? 'Copied!' : 'Copy Snippet'}
            </button>
          </div>

          {/* Quaternary */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quaternary (Mauve)
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              <button
                type="button"
                className="w-full rounded-lg bg-[#b96b9f] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#a44d87]"
              >
                Quaternary Button
              </button>
              <button
                type="button"
                className="w-full rounded-full bg-[#b96b9f] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#a44d87]"
              >
                Pill Quaternary
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#b96b9f] px-5 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#a44d87]"
              >
                <Download className="h-4 w-4" /> Download
              </button>
            </div>
            <button
              type="button"
              onClick={() =>
                handleCopy(
                  '<button className="rounded-lg bg-[#b96b9f] px-5 py-3 text-white">Quaternary</button>',
                  'quaternary',
                )
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {copied === 'quaternary' ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied === 'quaternary' ? 'Copied!' : 'Copy Snippet'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
