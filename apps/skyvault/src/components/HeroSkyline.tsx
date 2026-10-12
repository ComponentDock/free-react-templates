/**
 * Own artwork for the hero's bottom edge: a line-art city skyline of violet
 * towers with lighter outlines and mint/white window dots, drawn bottom-aligned
 * so the buildings sit on the band's lower edge. Purely decorative, so it is
 * hidden from the accessibility tree.
 */

interface Tower {
  x: number
  width: number
  height: number
  windows: number
}

const TOWERS: Tower[] = [
  { x: 40, width: 96, height: 168, windows: 3 },
  { x: 156, width: 72, height: 246, windows: 2 },
  { x: 248, width: 110, height: 132, windows: 4 },
  { x: 378, width: 84, height: 288, windows: 3 },
  { x: 482, width: 128, height: 196, windows: 4 },
  { x: 630, width: 76, height: 340, windows: 2 },
  { x: 726, width: 112, height: 224, windows: 4 },
  { x: 858, width: 92, height: 158, windows: 3 },
  { x: 970, width: 132, height: 268, windows: 4 },
  { x: 1122, width: 80, height: 190, windows: 2 },
  { x: 1222, width: 104, height: 132, windows: 3 },
  { x: 1346, width: 74, height: 232, windows: 2 },
]

const WINDOW_COLORS = ['#1befc5', 'rgba(255,255,255,.7)']

export function HeroSkyline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute bottom-0 left-0 z-[3] h-[400px] w-full"
    >
      <g>
        {TOWERS.map((tower) => {
          const top = 400 - tower.height
          return (
            <g key={tower.x}>
              <rect
                x={tower.x}
                y={top}
                width={tower.width}
                height={tower.height}
                fill="#4d1d85"
                stroke="rgba(213,223,227,.55)"
                strokeWidth="2"
              />
              {Array.from({ length: tower.windows }, (_row, row) =>
                Array.from({ length: tower.windows + 1 }, (_column, column) => (
                  <rect
                    key={`${row}-${column}`}
                    x={tower.x + 12 + column * 22}
                    y={top + 16 + row * 26}
                    width="8"
                    height="10"
                    fill={WINDOW_COLORS[row % WINDOW_COLORS.length]}
                  />
                )),
              )}
            </g>
          )
        })}
      </g>
    </svg>
  )
}
