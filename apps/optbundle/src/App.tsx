import { useEffect } from 'react'
import { Multiselect } from './components/Multiselect'
import { Footer } from './components/Footer'
import type { OptGroup } from './components/Multiselect'

const NFL_GROUPS: OptGroup[] = [
  {
    label: 'NFC EAST',
    options: ['Dallas Cowboys', 'New York Giants', 'Philadelphia Eagles', 'Washington Commanders'],
  },
  {
    label: 'NFC NORTH',
    options: ['Chicago Bears', 'Detroit Lions', 'Green Bay Packers', 'Minnesota Vikings'],
  },
  {
    label: 'NFC SOUTH',
    options: ['Atlanta Falcons', 'Carolina Panthers', 'New Orleans Saints', 'Tampa Bay Buccaneers'],
  },
  {
    label: 'NFC WEST',
    options: ['Arizona Cardinals', 'Los Angeles Rams', 'San Francisco 49ers', 'Seattle Seahawks'],
  },
  {
    label: 'AFC EAST',
    options: ['Buffalo Bills', 'Miami Dolphins', 'New England Patriots', 'New York Jets'],
  },
  {
    label: 'AFC NORTH',
    options: ['Baltimore Ravens', 'Cincinnati Bengals', 'Cleveland Browns', 'Pittsburgh Steelers'],
  },
  {
    label: 'AFC SOUTH',
    options: ['Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Tennessee Titans'],
  },
  {
    label: 'AFC WEST',
    options: ['Denver Broncos', 'Kansas City Chiefs', 'Las Vegas Raiders', 'Los Angeles Chargers'],
  },
]

export function App() {
  useEffect(() => {
    document.title = 'OptBundle — Multiselect Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center px-4 py-28">
          <div className="w-full max-w-xl text-center">
            <h2 className="mb-10 text-[28px] font-normal text-black">OptBundle</h2>
            <Multiselect groups={NFL_GROUPS} placeholder="Your Favorite Football Teams" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
