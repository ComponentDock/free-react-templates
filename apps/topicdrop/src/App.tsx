import { useEffect, useState } from 'react'
import { TopicDropdown, type Topic } from './components/TopicDropdown'
import { Footer } from './components/Footer'

const TOPICS: Topic[] = [
  { label: 'Family', value: 'family' },
  { label: 'Family Law', value: 'family-law' },
  { label: 'Friends', value: 'friends' },
  { label: 'Co-workers', value: 'co-workers' },
  { label: 'Startup', value: 'startup' },
  { label: 'Work', value: 'work' },
  { label: 'Basketball', value: 'basketball' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Investors', value: 'investors' },
  { label: 'US Embassy', value: 'us-embassy' },
]

export function App() {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    document.title = 'TopicDrop — Multiselect Topic Selector Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-topicdrop-bg font-sans">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28">
        <h1 className="mb-8 text-center text-[28px] font-normal text-topicdrop-heading">
          Topic Selector
        </h1>
        <div className="w-full max-w-sm">
          <label className="mb-2 block text-sm font-normal text-topicdrop-text">
            Select Topics
          </label>
          <TopicDropdown topics={TOPICS} selectedValues={selected} onChange={setSelected} />
          {selected.length > 0 && (
            <p className="mt-2 text-center text-sm text-topicdrop-text">
              {selected.length} {selected.length === 1 ? 'topic' : 'topics'} selected
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
