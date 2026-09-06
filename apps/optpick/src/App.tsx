import { useEffect, useState } from 'react'
import { MultiselectDropdown, type Option } from './components/MultiselectDropdown'
import { Footer } from './components/Footer'

const OPTIONS: Option[] = [
  { label: 'Orange', value: 'orange' },
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Mango', value: 'mango' },
  { label: 'Peach', value: 'peach' },
  { label: 'Kiwi', value: 'kiwi' },
]

export function App() {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    document.title = 'OptPick — Multiselect Dropdown Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-optpick-bg font-sans">
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm rounded-lg border border-optpick-border bg-optpick-card p-4 shadow-sm">
          <h1 className="mb-4 text-lg font-semibold text-optpick-text">Choose Fruits</h1>
          <MultiselectDropdown options={OPTIONS} selectedValues={selected} onChange={setSelected} />
          {selected.length > 0 && (
            <p className="mt-3 text-xs text-optpick-text-muted">{selected.length} selected</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
