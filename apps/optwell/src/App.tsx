import { useEffect, useState } from 'react'
import { SearchableMultiselect, type Option } from './components/SearchableMultiselect'
import { Footer } from './components/Footer'

const STATES: Option[] = [
  { label: 'Alaska', value: 'alaska' },
  { label: 'Hawaii', value: 'hawaii' },
  { label: 'California', value: 'california' },
  { label: 'Nevada', value: 'nevada' },
  { label: 'Oregon', value: 'oregon' },
  { label: 'Washington', value: 'washington' },
  { label: 'Alabama', value: 'alabama' },
  { label: 'Utah', value: 'utah' },
]

export function App() {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    document.title = 'OptWell — Searchable Multiselect Dropdown Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-optwell-bg font-sans">
      <main
        className="flex flex-1 flex-col items-center justify-center px-4"
        style={{ padding: '7rem 0' }}
      >
        <div className="w-full max-w-md">
          <h1 className="mb-2 text-[20px] font-bold text-optwell-text">OptWell</h1>
          <p className="mb-4 text-sm font-light text-optwell-text-muted">
            States separated by comma &quot;,&quot;
          </p>
          <SearchableMultiselect
            options={STATES}
            selectedValues={selected}
            onChange={setSelected}
            placeholder="Select states"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
