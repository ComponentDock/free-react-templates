import { useEffect } from 'react'
import { SignInDropdown } from './components/SignInDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Passkey — Sign-In Form Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa]">
      <main className="flex-1">
        <section className="py-[7em]">
          <div className="mx-auto max-w-[1140px] px-4">
            <h2 className="mb-5 text-center font-['Roboto',Arial,sans-serif] text-[28px] text-black">
              Dropdown #06
            </h2>
            <div className="flex justify-center">
              <SignInDropdown />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
