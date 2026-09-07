import { useState, useCallback } from 'react'

const MIN = 100
const MAX = 2000
const STEP = 100
const INITIAL = 1100

function formatMoney(value: number): string {
  return `$ ${value}`
}

export function GoalsStep() {
  const [value, setValue] = useState(INITIAL)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }, [])

  const percentage = ((value - MIN) / (MAX - MIN)) * 100

  return (
    <div role="tabpanel" id="panel-2" aria-labelledby="tab-2">
      <h2 className="mb-0 text-[30px] font-bold text-ink dark:text-ink-dark">
        Set Financial Goals
      </h2>
      <p className="mb-[40px] text-[14px] text-desc">
        Set up your money limit to reach the future plan
      </p>

      <div className="w-full max-w-[680px]">
        {/* Money slider */}
        <div className="mt-[110px]">
          <label htmlFor="money-slider" className="sr-only">
            Your money you can spend per month
          </label>
          <div className="relative">
            {/* Track background */}
            <div className="h-[9px] w-full rounded-none bg-slider">
              {/* Filled portion */}
              <div
                className="h-full bg-accent"
                style={{ width: `${percentage}%` }}
                aria-hidden="true"
              />
            </div>
            {/* Range input overlay */}
            <input
              id="money-slider"
              type="range"
              min={MIN}
              max={MAX}
              step={STEP}
              value={value}
              onChange={handleChange}
              aria-valuemin={MIN}
              aria-valuemax={MAX}
              aria-valuenow={value}
              aria-valuetext={formatMoney(value)}
              className="absolute inset-0 h-[9px] w-full cursor-pointer opacity-0"
            />
            {/* Handle */}
            <div
              className="pointer-events-none absolute top-[-12px] h-[30px] w-[15px] border border-accent bg-slider"
              style={{ left: `calc(${percentage}% - 7.5px)` }}
              aria-hidden="true"
            />
            {/* Tooltip */}
            <div
              className="pointer-events-none absolute bottom-[33px] text-[16px] text-accent"
              style={{ left: `calc(${percentage}% - 20px)` }}
              aria-hidden="true"
            >
              {formatMoney(value)}
            </div>
            {/* Pips */}
            <div className="mt-[50px] flex justify-between">
              <span className="text-[16px] text-muted-dark">$100</span>
              <span className="text-[16px] text-muted-dark">$2000</span>
            </div>
          </div>
        </div>

        {/* Readout */}
        <p className="pt-[62px] text-[16px] text-ink dark:text-ink-dark">
          Your money you can spend per month :{' '}
          <span className="text-[28px] font-bold">{formatMoney(value)}</span>
        </p>
      </div>
    </div>
  )
}
