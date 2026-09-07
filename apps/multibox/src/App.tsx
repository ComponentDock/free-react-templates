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

export type Variant = 'cream' | 'green' | 'blue'

const VARIANT_MAP: Record<Variant, string> = {
  cream: 'bg-[#e5e4cc]',
  green: 'bg-[#c7f0db]',
  blue: 'bg-[#d3f4ff]',
}

export function App() {
  const [selected, setSelected] = useState<string[]>([])
  const [variant, setVariant] = useState<Variant>('cream')

  useEffect(() => {
    document.title = 'Multibox — Multi-Select Snippet'
  }, [])

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: '#efefef' }}>
      <main className="flex flex-1 items-center justify-center px-4 py-28">
        <div className="w-full max-w-md">
          <h2 className="mb-8 text-center text-[20px] font-normal" style={{ color: '#333333' }}>
            Multi-Select #9
          </h2>
          <MultiSelect
            options={[...OPTIONS]}
            selected={selected}
            onChange={setSelected}
            tagClassName={VARIANT_MAP[variant]}
          />
          <div className="mt-6 flex justify-center gap-3">
            {(['cream', 'green', 'blue'] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                className={`h-6 w-6 rounded-full border-2 transition-all ${
                  variant === v ? 'border-gray-800 scale-110' : 'border-gray-400'
                }`}
                style={{
                  backgroundColor:
                    v === 'cream' ? '#e5e4cc' : v === 'green' ? '#c7f0db' : '#d3f4ff',
                }}
                aria-label={`Select ${v} variant`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
