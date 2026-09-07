import { useState, useEffect } from 'react'
import { MultiSelect } from './components/MultiSelect'
import { Footer } from './components/Footer'

const OPTIONS = [
  { label: 'Design', value: 'design' },
  { label: 'HTML5', value: 'html5' },
  { label: 'CSS3', value: 'css3' },
  { label: 'jQuery', value: 'jquery' },
  { label: 'BS4', value: 'bs4' },
  { label: 'Bootstrap', value: 'bootstrap' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'FrontEnd', value: 'frontend' },
] as const

function MultiSelectControl() {
  const [selected, setSelected] = useState<string[]>([])

  return <MultiSelect options={[...OPTIONS]} selected={selected} onChange={setSelected} />
}

export function App() {
  useEffect(() => {
    document.title = 'Picktag — Multi-Select Component'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-black dark:bg-gray-950 dark:text-white">
      <main className="flex flex-1 items-center justify-center px-4 py-28">
        <div className="w-full max-w-2xl">
          <h1 className="mb-2 text-center text-xl font-normal">Multi-Select #1</h1>
          <p className="mb-6 text-center text-sm font-light text-text-muted">
            Tags separate with comma &quot;,&quot;
          </p>
          <div className="mx-auto max-w-md">
            <MultiSelectControl />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
