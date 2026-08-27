import { useState } from 'react'
import { Copy, Check, Loader2 } from 'lucide-react'
import type { PlaygroundConfig } from '../data'

const VARIANT_OPTIONS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
const SIZE_OPTIONS = ['sm', 'md', 'lg']
const SHAPE_OPTIONS = ['rounded-lg', 'rounded-full', 'rounded-none']

const VARIANT_STYLES: Record<string, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-secondary text-white hover:bg-secondary-hover',
  success: 'bg-success text-white hover:bg-success-hover',
  danger: 'bg-danger text-white hover:bg-danger-hover',
  warning: 'bg-warning text-gray-900 hover:bg-warning-hover',
  info: 'bg-info text-gray-900 hover:bg-info-hover',
}

const SIZE_STYLES: Record<string, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

function buildClass(config: PlaygroundConfig): string {
  return `inline-flex items-center justify-center gap-2 font-medium transition-colors ${
    SIZE_STYLES[config.size]
  } ${config.shape} ${
    VARIANT_STYLES[config.variant]
  } ${config.disabled ? 'cursor-not-allowed opacity-50' : ''} ${config.loading ? 'opacity-75' : ''}`
}

function buildCode(config: PlaygroundConfig): string {
  return `<button\n  className="${buildClass(config)}"\n  ${config.disabled ? 'disabled' : ''}\n>\n  Button\n</button>`
}

export function Playground() {
  const [config, setConfig] = useState<PlaygroundConfig>({
    variant: 'primary',
    size: 'md',
    shape: 'rounded-lg',
    disabled: false,
    loading: false,
    iconPosition: 'none',
  })
  const [copied, setCopied] = useState(false)

  const update = <K extends keyof PlaygroundConfig>(key: K, value: PlaygroundConfig[K]) => {
    setConfig((prev) => ({ ...prev, [key]: value }))
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(buildCode(config))
    setCopied(true)
  }

  return (
    <section id="playground" className="bg-gray-50 py-16 px-4 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Interactive Playground
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Customize variant, size, shape, and state. Copy the generated JSX code.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <div>
              <label
                htmlFor="variant-select"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Variant
              </label>
              <select
                id="variant-select"
                value={config.variant}
                onChange={(e) => update('variant', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              >
                {VARIANT_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="size-select"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Size
              </label>
              <select
                id="size-select"
                value={config.size}
                onChange={(e) => update('size', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              >
                {SIZE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="shape-select"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Shape
              </label>
              <select
                id="shape-select"
                value={config.shape}
                onChange={(e) => update('shape', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              >
                {SHAPE_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s === 'rounded-lg' ? 'Rounded' : s === 'rounded-full' ? 'Pill' : 'Square'}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={config.disabled}
                  onChange={(e) => update('disabled', e.target.checked)}
                  className="rounded"
                />
                Disabled
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={config.loading}
                  onChange={(e) => update('loading', e.target.checked)}
                  className="rounded"
                />
                Loading
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
              <button className={buildClass(config)} disabled={config.disabled || config.loading}>
                {config.loading && <Loader2 className="h-4 w-4 animate-spin" />}
                Button
              </button>
            </div>

            <div className="relative flex-1 rounded-xl border border-gray-200 bg-gray-900 p-4 dark:border-gray-800">
              <pre className="overflow-x-auto text-xs text-green-400">
                <code>{buildCode(config)}</code>
              </pre>
              <button
                onClick={handleCopy}
                className="absolute right-2 top-2 rounded-lg bg-gray-800 p-2 text-gray-400 hover:text-white"
                aria-label={copied ? 'Copied' : 'Copy code'}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
