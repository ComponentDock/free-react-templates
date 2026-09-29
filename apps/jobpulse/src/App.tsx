import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-500 font-sans text-white transition-colors dark:bg-brand-900 dark:text-white">
      <main className="flex flex-1 flex-col items-center justify-start px-4 pt-20">
        <h1 className="mb-2 text-3xl font-semibold tracking-wide md:text-4xl">Find For A Jobs</h1>
        <SearchBar />
      </main>
      <Footer />
    </div>
  )
}
