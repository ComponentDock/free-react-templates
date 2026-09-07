import { useEffect, useState } from 'react'
import { MultiselectDropdown, type Option } from './components/MultiselectDropdown'
import { Footer } from './components/Footer'

const COLORS: Option[] = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Purple', value: 'purple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pink', value: 'pink' },
  { label: 'Teal', value: 'teal' },
  { label: 'Indigo', value: 'indigo' },
  { label: 'Amber', value: 'amber' },
]

export function App() {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    document.title = 'OptSelect — Multiselect Dropdown Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-optselect-bg font-sans">
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm rounded-lg border border-optselect-border bg-optselect-card p-4 shadow-sm">
          <h1 className="mb-4 text-lg font-semibold text-optselect-text">Select Options</h1>
          <MultiselectDropdown options={COLORS} selectedValues={selected} onChange={setSelected} />
          {selected.length > 0 && (
            <p className="mt-3 text-xs text-optselect-text-muted">{selected.length} selected</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
