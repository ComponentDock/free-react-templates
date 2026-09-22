import { useState } from 'react'
import { Zap } from 'lucide-react'

const tabData = [
  {
    label: 'Goalkeepers',
    players: [
      { name: 'Nathaniel Murphy', points: '95.5', seed: 'stat1' },
      { name: 'Marcus Chen', points: '92.3', seed: 'stat2' },
    ],
  },
  {
    label: 'Defenders',
    players: [
      { name: 'Olivia Barnes', points: '88.1', seed: 'stat3' },
      { name: 'Ethan Wells', points: '90.7', seed: 'stat4' },
    ],
  },
  {
    label: 'Midfielders',
    players: [
      { name: 'Sophia Lane', points: '91.2', seed: 'stat5' },
      { name: 'James Porter', points: '87.9', seed: 'stat6' },
    ],
  },
  {
    label: 'Attackers',
    players: [
      { name: 'Isabella Ford', points: '94.0', seed: 'stat7' },
      { name: 'Daniel Ross', points: '89.6', seed: 'stat8' },
    ],
  },
]

const leagueTable = [
  { pos: 1, team: 'Costa Caribe', wins: 18, losses: 4, pts: 40, pct: '81.8' },
  { pos: 2, team: 'Brooklyn Nets', wins: 16, losses: 6, pts: 38, pct: '72.7' },
  { pos: 3, team: 'Toronto Raptors', wins: 14, losses: 8, pts: 36, pct: '63.6' },
  { pos: 4, team: 'San Isidro', wins: 12, losses: 10, pts: 34, pct: '54.5' },
  { pos: 5, team: 'Jinotega', wins: 10, losses: 12, pts: 32, pct: '45.5' },
]

export function PlayerStatistics() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTab = tabData[activeIndex]!

  return (
    <section className="bg-dark-bg py-16 text-white">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Player stats with tabs */}
          <div className="md:col-span-8">
            <div className="mb-6 flex items-center gap-2">
              <Zap size={20} className="text-primary" />
              <h2 className="font-heading text-2xl font-bold uppercase">Player Statistics</h2>
            </div>

            {/* Tabs */}
            <div className="mb-6 flex gap-1 border-b border-dark-border">
              {tabData.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveIndex(i)}
                  className={`px-4 py-2 font-heading text-sm uppercase transition-colors ${
                    activeIndex === i
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Player cards */}
            <div className="grid grid-cols-2 gap-4">
              {activeTab.players.map((p) => (
                <div key={p.name} className="flex items-center gap-4 rounded bg-dark-card p-4">
                  <img
                    src={`https://picsum.photos/seed/hoopside-${p.seed}/100/100`}
                    alt={p.name}
                    className="h-16 w-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-heading text-xl font-bold text-gold">{p.points} pts</p>
                    <p className="text-sm text-gray-300">{p.name}</p>
                  </div>
                  <a
                    href="#portfolio"
                    className="ml-auto text-xs uppercase text-primary underline underline-offset-2 hover:no-underline"
                  >
                    View Portfolio
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* League table */}
          <div className="md:col-span-4">
            <h3 className="mb-4 font-heading text-lg font-bold uppercase text-gray-300">
              League Points
            </h3>
            <div className="overflow-hidden rounded border border-dark-border">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-dark-muted text-left uppercase tracking-wider text-gray-500">
                    <th className="p-2">#</th>
                    <th className="p-2">Team</th>
                    <th className="p-2 text-center">W</th>
                    <th className="p-2 text-center">L</th>
                    <th className="p-2 text-center">PTS</th>
                    <th className="p-2 text-center">PCT</th>
                  </tr>
                </thead>
                <tbody>
                  {leagueTable.map((row) => (
                    <tr key={row.pos} className="border-t border-dark-border">
                      <td className="p-2 font-bold text-primary">{row.pos}</td>
                      <td className="p-2 text-gray-300">{row.team}</td>
                      <td className="p-2 text-center text-gray-400">{row.wins}</td>
                      <td className="p-2 text-center text-gray-400">{row.losses}</td>
                      <td className="p-2 text-center font-bold text-white">{row.pts}</td>
                      <td className="p-2 text-center text-gray-400">{row.pct}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
