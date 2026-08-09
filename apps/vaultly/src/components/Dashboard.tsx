import { ArrowUpRight, LayoutDashboard, Wallet } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const tabs = ['Portfolio Allocation', 'Goals', 'Recent Activity'] as const

const activityRows = [
  {
    label: 'Portfolio Rebalanced',
    detail: 'Auto-rebalanced to target allocation',
    amount: '+$4,250.00',
  },
  {
    label: 'VTI Dividend',
    detail: 'Dividend payment • Vanguard Total Market',
    amount: '+$128.40',
  },
] as const

export function Dashboard() {
  return (
    <section id="dashboard" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Dashboard
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Your Complete Financial Picture
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            See every account, goal, and opportunity in one beautifully simple dashboard.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
          {/* Panel header */}
          <div className="flex items-center gap-2 border-b border-gray-200 px-6 py-4 dark:border-gray-800">
            <LayoutDashboard
              className="h-5 w-5 text-primary-600 dark:text-primary-400"
              aria-hidden="true"
            />
            <span className="font-display text-sm font-semibold text-gray-900 dark:text-white">
              Finley Dashboard
            </span>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 px-6 py-4 dark:border-gray-800">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                aria-pressed={index === 0}
                className={cn(
                  'rounded-lg px-4 py-1.5 text-sm font-semibold transition-colors',
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-5">
            {/* Net worth */}
            <div className="sm:col-span-2">
              <p className="text-sm font-medium text-gray-500">Total Net Worth</p>
              <p className="mt-1 flex items-center gap-2">
                <span className="font-mono text-3xl font-bold text-gray-900 dark:text-white">
                  $127,450.32
                </span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-secondary-100 px-2 py-0.5 text-xs font-bold text-secondary-700 dark:bg-secondary-900/50 dark:text-secondary-300">
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  +24.5%
                </span>
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                <Wallet className="h-4 w-4" aria-hidden="true" />
                Across 7 connected accounts
              </p>

              {/* Mini bars */}
              <div className="mt-6 flex h-24 items-end gap-2" aria-hidden="true">
                {[40, 55, 45, 65, 60, 75, 70, 85, 80, 95, 90, 100].map((height, index) => (
                  <div
                    key={index}
                    style={{ height: `${height}%` }}
                    className={cn(
                      'flex-1 rounded-t',
                      index >= 9
                        ? 'bg-gradient-to-t from-primary-600 to-secondary-500'
                        : 'bg-primary-100 dark:bg-primary-900/50',
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Activity rows */}
            <div className="sm:col-span-3">
              <p className="text-sm font-medium text-gray-500">Recent Activity</p>
              <ul className="mt-3 space-y-3">
                {activityRows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 dark:border-gray-800"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-100 text-secondary-700 dark:bg-secondary-900/50 dark:text-secondary-300">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {row.label}
                        </p>
                        <p className="text-xs text-gray-500">{row.detail}</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-bold text-secondary-700 dark:text-secondary-300">
                      {row.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
