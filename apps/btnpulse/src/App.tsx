import { useEffect } from 'react'
import { SizeButtons } from './components/SizeButtons'
import { ColorButtons } from './components/ColorButtons'
import { BlockButton } from './components/BlockButton'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BtnPulse — Button Showcase Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-5xl">
          <h2 className="mb-8 text-[20px] font-normal text-gray-900">
            #04 &mdash; Bootstrap Buttons
          </h2>

          <SizeButtons />

          <div className="mb-3">
            <div className="text-center">
              <small className="text-xs text-gray-500">Button Colors</small>
            </div>
          </div>
          <ColorButtons />

          <BlockButton />
        </div>
      </main>
      <Footer />
    </div>
  )
}
