import { Header } from './components/Header'
import { SizeScale } from './components/SizeScale'
import { ColorPalette } from './components/ColorPalette'
import { FullWidth } from './components/FullWidth'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main>
        <SizeScale />
        <ColorPalette />
        <FullWidth />
      </main>
      <Footer />
    </div>
  )
}
