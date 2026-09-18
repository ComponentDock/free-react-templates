import { TrendingUp, Zap, DollarSign, Leaf } from 'lucide-react'
import { Reveal } from './Reveal'

interface ComparisonRow {
  label: string
  solar: string
  traditional: string
}

const comparisons: ComparisonRow[] = [
  { label: 'Monthly Cost', solar: '$45', traditional: '$180' },
  { label: 'Annual Cost', solar: '$540', traditional: '$2,160' },
  { label: '10-Year Cost', solar: '$5,400', traditional: '$21,600' },
  { label: 'CO2 Emissions', solar: '0 tons', traditional: '12 tons/yr' },
]

const roiSteps = [
  { year: 'Year 1', savings: '$1,620', icon: DollarSign },
  { year: 'Year 5', savings: '$8,100', icon: TrendingUp },
  { year: 'Year 10', savings: '$16,200', icon: TrendingUp },
  { year: 'Year 25', savings: '$40,500', icon: Leaf },
] as const

export function RoiCalculator() {
  return (
    <section id="roi" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
              ROI Calculator
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Solar vs. Traditional Energy
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              See how much you save over time by switching from grid power to solar.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Comparison table */}
          <Reveal>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Cost Comparison</h3>
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                        Metric
                      </th>
                      <th className="px-4 py-3 text-center font-semibold text-primary-600 dark:text-primary-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Zap className="h-4 w-4" aria-hidden="true" />
                          Solar
                        </span>
                      </th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-500 dark:text-gray-400">
                        Grid
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-gray-100 last:border-0 dark:border-gray-800"
                      >
                        <td className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                          {row.label}
                        </td>
                        <td className="px-4 py-3 text-center font-bold text-primary-600 dark:text-primary-400">
                          {row.solar}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-500 line-through dark:text-gray-400">
                          {row.traditional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* ROI bar chart */}
          <Reveal delay={100}>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Cumulative Savings
              </h3>
              <div className="mt-6 flex flex-col gap-4">
                {roiSteps.map((step, index) => {
                  const widths = [20, 45, 70, 100]
                  return (
                    <div key={step.year} className="flex items-center gap-4">
                      <span className="w-20 shrink-0 text-sm font-medium text-gray-600 dark:text-gray-400">
                        {step.year}
                      </span>
                      <div className="relative h-10 flex-1 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                        <div
                          className="absolute inset-y-0 left-0 flex items-center justify-end rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-3 transition-all duration-700"
                          style={{ width: `${widths[index]!}%` }}
                        >
                          <span className="text-sm font-bold text-white">{step.savings}</span>
                        </div>
                      </div>
                      <step.icon
                        className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                        aria-hidden="true"
                      />
                    </div>
                  )
                })}
              </div>
              <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                Based on average residential usage and current federal tax credits.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
