import { useEffect } from 'react'
import { SizeButtons } from './components/SizeButtons'
import { ColorButtons } from './components/ColorButtons'
import { BlockButton } from './components/BlockButton'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BtnBolt — Rounded Bootstrap Buttons'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-btnbolt-heading">
      <main className="flex flex-1 items-center justify-center px-4 py-28">
        <div className="w-full max-w-5xl">
          <h2 className="mb-12 text-[20px] font-normal text-btnbolt-heading">
            #09 &mdash; Bootstrap 4 Buttons
          </h2>

          <SizeButtons />

          <div className="mb-3">
            <div className="text-center">
              <small className="text-xs font-normal text-btnbolt-label">Button Colors</small>
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
