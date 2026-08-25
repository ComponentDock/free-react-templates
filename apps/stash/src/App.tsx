import { Accordion } from './components/Accordion'
import { Footer } from './components/Footer'
import { PANELS } from './panels'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-black">
      <main>
        <section className="px-4 py-14 md:py-28">
          <div className="mx-auto w-full max-w-[1140px]">
            <h2 className="mb-12 text-center text-[28px] font-medium text-black md:pb-6">
              Accordion #04
            </h2>
            <div className="mx-auto w-full md:max-w-2xl lg:max-w-xl">
              <div className="overflow-hidden rounded-[5px] bg-white shadow-[0px_10px_29px_-16px_rgba(0,0,0,0.12)]">
                <Accordion panels={PANELS} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
