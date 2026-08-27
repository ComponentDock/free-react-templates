import { useState } from 'react'

export function ButtonGroupSection() {
  const [activeRadio, setActiveRadio] = useState('Left')
  const [checkboxes, setCheckboxes] = useState({ one: true, two: false, three: false })

  const toggleCheck = (key: 'one' | 'two' | 'three') => {
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section id="groups" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            4. Button Groups & Toggles
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            Toolbar groups, button radio selectors, and interactive button checkboxes.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Group & Toolbar */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Button Toolbar Group
            </h3>
            <div className="mt-6 inline-flex rounded-lg shadow-sm" role="group">
              <button
                type="button"
                className="rounded-l-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-750 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Left
              </button>
              <button
                type="button"
                className="border-t border-b border-r border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-750 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Middle
              </button>
              <button
                type="button"
                className="rounded-r-lg border-t border-b border-r border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-750 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Right
              </button>
            </div>
          </div>

          {/* Button Radio Group */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Button Radio Selector
            </h3>
            <div className="mt-6 inline-flex rounded-lg shadow-sm">
              {['Left', 'Middle', 'Right'].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setActiveRadio(opt)}
                  className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                    activeRadio === opt
                      ? 'bg-indigo-600 text-white shadow-inner'
                      : 'border border-gray-300 bg-white text-gray-750 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200'
                  } ${opt === 'Left' ? 'rounded-l-lg' : opt === 'Right' ? 'rounded-r-lg' : 'border-l-0 border-r-0'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Selected radio:{' '}
              <strong className="text-indigo-600 dark:text-indigo-400">{activeRadio}</strong>
            </p>
          </div>

          {/* Button Checkboxes */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2 dark:border-gray-800 dark:bg-gray-950">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Button Checkbox Toggles
            </h3>
            <div className="mt-6 flex flex-wrap gap-4">
              {(['one', 'two', 'three'] as const).map((key, idx) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleCheck(key)}
                  className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                    checkboxes[key]
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200'
                  }`}
                >
                  Checkbox Option {idx + 1} ({checkboxes[key] ? 'Checked' : 'Unchecked'})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
