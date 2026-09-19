const items = [
  'Free shipping over $100',
  '30 day returns',
  'Carbon neutral delivery',
  'Natural fibres only',
]

export function Marquee() {
  return (
    <div className="bg-warm-100 overflow-hidden py-3">
      <div className="flex animate-[marquee_34s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-sm text-warm-700 mx-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
