import { useEffect, useState } from 'react'
import { TopicDropdown, type Topic } from './components/TopicDropdown'
import { Footer } from './components/Footer'

const TOPICS: Topic[] = [
  { label: 'Topic 1', value: 'topic-1' },
  { label: 'Topic 2', value: 'topic-2' },
  { label: 'Topic 3', value: 'topic-3' },
  { label: 'Topic 4', value: 'topic-4' },
  { label: 'Topic 5', value: 'topic-5' },
  { label: 'Topic 6', value: 'topic-6' },
  { label: 'Topic 7', value: 'topic-7' },
  { label: 'Topic 8', value: 'topic-8' },
  { label: 'Topic 9', value: 'topic-9' },
  { label: 'Topic 10', value: 'topic-10' },
  { label: 'Topic 11', value: 'topic-11' },
]

export function App() {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    document.title = 'Topicpick — Multiselect Topic Selector Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-topicpick-bg font-sans">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28">
        <h1 className="mb-8 text-center text-[28px] font-normal text-topicpick-heading">
          Topic Selector
        </h1>
        <div className="w-full max-w-sm">
          <label className="mb-2 block text-sm font-normal text-topicpick-text">
            Select Topics
          </label>
          <TopicDropdown topics={TOPICS} selectedValues={selected} onChange={setSelected} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
