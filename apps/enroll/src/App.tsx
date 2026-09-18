import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Photo band — 200px tall, full-width cover image */}
      <div
        className="h-[200px] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/enroll-hero/1920/400')",
        }}
      />

      {/* Form area — #f6f7fc, card straddles the band boundary */}
      <section className="relative flex min-h-[700px] items-center justify-center bg-[var(--color-area)] px-4 pb-20 pt-4">
        {/* Straddling card — pulled up 300px over the photo band */}
        <div className="mx-auto w-full max-w-[540px] -mt-[300px] bg-white p-10 max-sm:p-6">
          <RegistrationForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
