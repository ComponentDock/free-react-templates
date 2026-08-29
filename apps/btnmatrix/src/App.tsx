import { useEffect } from 'react'
import { PickYourStyle } from './components/PickYourStyle'
import { PickYourColor } from './components/PickYourColor'
import { SocialGrid } from './components/SocialGrid'
import { SocialButtons } from './components/SocialButtons'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BtnMatrix — Bootstrap Buttons #10'
  }, [])

  return (
    <div className="min-h-screen bg-white text-btnmatrix-heading">
      <main className="mx-auto max-w-6xl px-4 py-28">
        {/* Page heading */}
        <h1 className="mb-12 text-[32px] font-medium text-btnmatrix-heading">Button #10</h1>

        {/* Pick Your Style */}
        <PickYourStyle />

        {/* Pick Your Color */}
        <PickYourColor />

        {/* Social Action Grid */}
        <SocialGrid />

        {/* Social Buttons */}
        <SocialButtons />
      </main>

      <Footer />
    </div>
  )
}
