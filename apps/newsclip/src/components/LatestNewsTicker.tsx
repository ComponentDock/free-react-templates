import { latestTickerHeadlines } from '../data'

export function LatestNewsTicker() {
  return (
    <div className="overflow-hidden border-y border-gray-200 bg-white py-3">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-4">
          <span className="shrink-0 bg-brand px-2 py-0.5 text-xs font-bold uppercase text-white">
            Latest
          </span>
          <div className="overflow-hidden">
            <p className="animate-[marquee_30s_linear_infinite] whitespace-nowrap text-sm text-ink">
              {latestTickerHeadlines.map((item, i) => (
                <span key={item.time}>
                  {i > 0 && <span className="mx-6 text-meta">●</span>}
                  <span className="font-medium text-meta">{item.time}</span> {item.text}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
