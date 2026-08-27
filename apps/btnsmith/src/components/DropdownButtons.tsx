import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function DropdownButtons() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [selected, setSelected] = useState<string>('Select Action')

  const toggleDropdown = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="dropdown" className="py-16 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            3. Interactive Dropdown Buttons
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            Buttons with expandable menu actions for navigation and toolbars.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('primary')}
              aria-expanded={openId === 'primary'}
              className="inline-flex items-center gap-2 rounded-lg bg-[#007bff] px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-[#0069d9]"
            >
              Primary Dropdown <ChevronDown className="h-4 w-4" />
            </button>
            {openId === 'primary' && (
              <div className="absolute left-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                <button
                  type="button"
                  onClick={() => {
                    setSelected('Action 1')
                    setOpenId(null)
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Action
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelected('Another Action')
                    setOpenId(null)
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Another action
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelected('Something Else')
                    setOpenId(null)
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Something else here
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('secondary')}
              aria-expanded={openId === 'secondary'}
              className="inline-flex items-center gap-2 rounded-lg bg-[#6c757d] px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-[#5a6268]"
            >
              Secondary Dropdown <ChevronDown className="h-4 w-4" />
            </button>
            {openId === 'secondary' && (
              <div className="absolute left-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                <button
                  type="button"
                  onClick={() => {
                    setSelected('Settings')
                    setOpenId(null)
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Settings
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelected('Profile')
                    setOpenId(null)
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Profile
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Last selected action:{' '}
          <strong className="text-indigo-600 dark:text-indigo-400">{selected}</strong>
        </div>
      </div>
    </section>
  )
}
