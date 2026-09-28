import { SearchTabs } from './components/SearchTabs'
import { SearchForm } from './components/SearchForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col font-[family-name:var(--font-family-heading)]">
      <main
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4 py-16"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/wayfare-hotel/1920/1080)',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-3xl">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Search Hotels</h1>
          <SearchTabs />
          <SearchForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
