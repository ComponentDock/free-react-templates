import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { formatEuroCompact, goalMonthlyLine, goalPercent, type Goal } from '../data/accounts'

interface GoalCardProps {
  goal: Goal
}

/** The savings card: a 116px progress ring beside the sums, with the CTA bottom-anchored. */
export function GoalCard({ goal }: GoalCardProps) {
  const [noteOpen, setNoteOpen] = useState(false)
  const percent = goalPercent(goal)

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <h2 id="coffer-goal" className="m-0 text-base font-semibold">
          {goal.title}
        </h2>
        {goal.onTrack && (
          <span className="flex-none rounded-full bg-green-200 px-[10px] py-1 text-[12.5px] font-semibold text-green-900">
            {goal.pill}
          </span>
        )}
      </div>
      <div className="my-[20px] flex items-center gap-[18px]">
        <svg
          viewBox="0 0 120 120"
          role="img"
          aria-label={`${percent} percent saved`}
          className="size-[116px] flex-none rotate-[-90deg]"
        >
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#fde68a"
            strokeWidth="10"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={`${percent} 100`}
          />
          <text
            x="60"
            y="58"
            textAnchor="middle"
            transform="rotate(90 60 60)"
            className="fill-white text-[24px] font-bold tabular-nums"
          >
            {percent}%
          </text>
          <text
            x="60"
            y="78"
            textAnchor="middle"
            transform="rotate(90 60 60)"
            className="fill-white text-[12px]"
          >
            saved
          </text>
        </svg>
        <div>
          <p className="m-0 text-[18px] font-semibold">{goal.name}</p>
          <p className="mt-1 mb-0 text-[15px] tabular-nums text-violet-100">
            <strong className="text-[20px] font-bold text-white">
              {formatEuroCompact(goal.savedCents)}
            </strong>
            {` of ${formatEuroCompact(goal.targetCents)}`}
          </p>
          <p className="mt-1 mb-0 text-[13.5px] tabular-nums text-violet-100">
            {goalMonthlyLine(goal)}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setNoteOpen((open) => !open)}
        aria-expanded={noteOpen}
        className={cn(
          'money-btn mt-auto w-full rounded-[14px] bg-white px-4 py-3',
          'text-[15px] font-semibold text-[#4c1d95]',
        )}
      >
        {goal.cta}
      </button>
      {noteOpen && (
        <p role="status" className="mt-2 mb-0 text-[12.5px] text-violet-100">
          Top-ups are sent from the banking app — this demo has no transfer service.
        </p>
      )}
    </>
  )
}
