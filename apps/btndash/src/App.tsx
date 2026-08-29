import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SolidButtons } from './components/SolidButtons'
import { OutlineButtons } from './components/OutlineButtons'
import { IconButtons } from './components/IconButtons'
import { ShapeVariants } from './components/ShapeVariants'
import { SizesAndStates } from './components/SizesAndStates'
import { Playground } from './components/Playground'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SolidButtons />
        <OutlineButtons />
        <IconButtons />
        <ShapeVariants />
        <SizesAndStates />
        <Playground />
      </main>
      <Footer />
    </div>
  )
}

export default App
