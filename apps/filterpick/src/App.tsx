import { useEffect, useState } from 'react'
import { CheckmarkDropdown, type Option } from './components/CheckmarkDropdown'
import { Footer } from './components/Footer'

const OPTIONS: Option[] = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Python', value: 'python' },
  { label: 'Rust', value: 'rust' },
  { label: 'Go', value: 'go' },
  { label: 'Swift', value: 'swift' },
  { label: 'Kotlin', value: 'kotlin', disabled: true },
  { label: 'Ruby', value: 'ruby' },
  { label: 'PHP', value: 'php' },
  { label: 'C++', value: 'cpp' },
]

export function App() {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    document.title = 'FilterPick — Multiselect Checkmarks Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-filterpick-bg font-sans">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-sm rounded-xl border border-filterpick-border bg-filterpick-card p-6 shadow-sm">
          <h1 className="mb-2 text-center text-xl font-semibold text-filterpick-text">
            Select Languages
          </h1>
          <p className="mb-6 text-center text-sm text-filterpick-text-muted">
            Choose your preferred programming languages
          </p>
          <CheckmarkDropdown options={OPTIONS} selectedValues={selected} onChange={setSelected} />
          {selected.length > 0 && (
            <p className="mt-3 text-xs text-filterpick-text-muted">{selected.length} selected</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
