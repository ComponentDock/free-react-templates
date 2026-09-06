import { useEffect, useState } from 'react'
import { ComboboxDropdown, type Option } from './components/ComboboxDropdown'
import { Footer } from './components/Footer'

const LANGUAGES: Option[] = [
  { label: 'PHP', value: 'php' },
  { label: 'Javascript', value: 'javascript' },
  { label: 'Java', value: 'java' },
  { label: 'jQuery', value: 'jquery' },
  { label: 'SQL', value: 'sql' },
  { label: 'Wordpress', value: 'wordpress' },
  { label: 'Python', value: 'python' },
  { label: '.Net', value: 'dotnet' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
]

export function App() {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    document.title = 'Combobox — Multiselect Dropdown Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-combobox-bg font-sans">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-sm">
          <h1 className="mb-8 text-center text-[28px] font-normal text-combobox-heading">
            Select Language
          </h1>
          <label className="mb-2 block text-sm font-normal text-combobox-text">
            Choose languages
          </label>
          <ComboboxDropdown options={LANGUAGES} selectedValues={selected} onChange={setSelected} />
          {selected.length > 0 && (
            <p className="mt-3 text-xs text-combobox-text-muted">{selected.length} selected</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
