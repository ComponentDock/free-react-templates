import { useEffect, useState } from 'react'
import { SearchableMultiselect, type Option } from './components/SearchableMultiselect'
import { Footer } from './components/Footer'

const NAMES: Option[] = [
  { label: 'Joefrey', value: 'joefrey' },
  { label: 'Robert', value: 'robert' },
  { label: 'Jorge', value: 'jorge' },
  { label: 'Mark', value: 'mark' },
  { label: 'Luke', value: 'luke' },
  { label: 'John', value: 'john' },
  { label: 'James', value: 'james' },
  { label: 'Ryan', value: 'ryan' },
  { label: 'Ronnie', value: 'ronnie' },
]

export function App() {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    document.title = 'TealPick — Multiselect Dropdown Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-tealpick-bg font-sans">
      <main
        className="flex flex-1 flex-col items-center justify-center px-4"
        style={{ padding: '7rem 0' }}
      >
        <div className="w-full max-w-md">
          <h2 className="mb-2 text-center text-[20px] font-normal text-tealpick-text">
            Multi-Select #3
          </h2>
          <p className="mb-4 text-center text-sm font-light text-tealpick-text-muted">
            Names separate with comma &quot;,&quot;
          </p>
          <SearchableMultiselect
            options={NAMES}
            selectedValues={selected}
            onChange={setSelected}
            placeholder="Select names"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
