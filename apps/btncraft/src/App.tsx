import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SolidButtons } from './components/SolidButtons'
import { OutlineButtons } from './components/OutlineButtons'
import { ShapeVariants } from './components/ShapeVariants'
import { SizesAndStates } from './components/SizesAndStates'
import { IconButtons } from './components/IconButtons'
import { Playground } from './components/Playground'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <SolidButtons />
        <OutlineButtons />
        <ShapeVariants />
        <SizesAndStates />
        <IconButtons />
        <Playground />
      </main>
      <Footer />
    </div>
  )
}
