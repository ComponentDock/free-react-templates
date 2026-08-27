import { Accordion } from './components/Accordion'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-black">
      <main>
        <section className="px-4 py-14 md:py-28">
          <div className="mx-auto w-full max-w-[1140px]">
            <h2 className="mb-12 text-center text-[28px] font-medium text-black md:pb-6">
              Accordion #18
            </h2>
            <div className="mx-auto w-full max-w-[600px]">
              <Accordion />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
