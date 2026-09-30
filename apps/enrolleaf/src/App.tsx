import { useEffect } from 'react'
import { SignupForm } from './components/SignupForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Enrolleaf — Registration Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex flex-1 flex-col lg:flex-row">
        {/* Left column — form (50%) */}
        <div className="flex items-center justify-center px-6 py-12 lg:h-screen lg:w-1/2 lg:min-h-[800px]">
          <div className="w-full max-w-[480px]">
            <h2 className="mb-6 text-[28px] font-medium text-[var(--color-heading)]">Sign Up</h2>
            <SignupForm />
          </div>
        </div>

        {/* Right column — background image (50%) */}
        <div
          className="hidden min-h-[500px] bg-cover bg-center lg:block lg:h-screen lg:w-1/2 lg:min-h-[800px]"
          style={{
            backgroundImage: `url('https://picsum.photos/seed/enrolleaf/1200/800')`,
          }}
        />
        {/* Mobile image — visible only on small screens */}
        <div
          className="h-[500px] bg-cover bg-center lg:hidden"
          style={{
            backgroundImage: `url('https://picsum.photos/seed/enrolleaf/1200/800')`,
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
