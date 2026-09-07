import { useEffect, useState } from 'react'
import { MultiSelect } from './components/MultiSelect'
import { Footer } from './components/Footer'

const OPTIONS = [
  'Design',
  'HTML5',
  'CSS3',
  'jQuery',
  'BS4',
  'Bootstrap',
  'WordPress',
  'FrontEnd',
] as const

const VARIANTS = [
  { tagClassName: 'bg-[#e5e4cc]', label: 'cream' },
  { tagClassName: 'bg-[#c7f0db]', label: 'green' },
  { tagClassName: 'bg-[#d3f4ff]', label: 'blue' },
] as const

export function App() {
  const [selections, setSelections] = useState<string[][]>([[], [], []])

  useEffect(() => {
    document.title = 'OptFlow — Multi-Select Snippet'
  }, [])

  const handleChange = (index: number) => (selected: string[]) => {
    setSelections((prev) => prev.map((s, i) => (i === index ? selected : s)))
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: '#efefef' }}>
      <main className="flex flex-1 items-center justify-center px-4 py-28">
        <div className="w-full max-w-md">
          <h2 className="mb-8 text-center text-[20px] font-normal" style={{ color: '#333333' }}>
            Multi-Select Showcase (Limit 5)
          </h2>
          <div className="space-y-6">
            {VARIANTS.map((variant, i) => (
              <MultiSelect
                key={variant.label}
                options={[...OPTIONS]}
                selected={selections[i]!}
                onChange={handleChange(i)}
                tagClassName={variant.tagClassName}
                maxSelections={5}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
