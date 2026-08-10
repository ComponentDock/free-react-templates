import { cn } from '@free-react-templates/ui'

interface SectionPanelProps {
  title: string
  pills?: readonly string[]
  activePill?: string
  onSelectPill?: (pill: string) => void
  morePills?: readonly string[]
  moreOpen?: boolean
  onToggleMore?: () => void
}

export function SectionPanel({
  title,
  pills,
  activePill,
  onSelectPill,
  morePills = [],
  moreOpen = false,
  onToggleMore,
}: SectionPanelProps) {
  const pillClass = (pill: string) =>
    cn(
      'h-7 rounded-[14px] bg-chip px-[22px] font-display text-xs font-medium uppercase tracking-wide text-black/40 transition-colors hover:bg-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
      activePill === pill && 'bg-white text-black dark:bg-gray-600 dark:text-white',
    )

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4 dark:border-gray-700">
      <h2 className="font-display text-lg font-bold text-black dark:text-white">{title}</h2>
      {pills && (
        <div className="flex flex-wrap items-center gap-2">
          {pills.map((pill) => (
            <button
              key={pill}
              type="button"
              aria-pressed={activePill === pill}
              onClick={() => onSelectPill?.(pill)}
              className={pillClass(pill)}
            >
              {pill}
            </button>
          ))}
          {morePills.length > 0 && onToggleMore && (
            <>
              <button
                type="button"
                aria-expanded={moreOpen}
                onClick={onToggleMore}
                className="h-7 rounded-[14px] bg-chip px-[22px] font-display text-xs font-medium uppercase tracking-wide text-black/40 transition-colors hover:bg-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                more
              </button>
              {moreOpen && (
                <div className="flex w-full flex-wrap gap-2">
                  {morePills.map((pill) => (
                    <button
                      key={pill}
                      type="button"
                      aria-pressed={activePill === pill}
                      onClick={() => onSelectPill?.(pill)}
                      className={pillClass(pill)}
                    >
                      {pill}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
