import { SignupCard } from './components/SignupCard'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="relative min-h-screen">
      {/* Photographic backdrop */}
      <img
        data-testid="page-background"
        src="https://picsum.photos/seed/signum-1/1600/1000"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Blue→pink gradient tint at 40% opacity over the photo */}
      <div
        data-testid="gradient-overlay"
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(45deg,#0360ed_0%,#ff5db1_100%)] opacity-40"
      />

      <div className="relative flex min-h-screen flex-col items-center px-4 py-28">
        <div className="w-full max-w-[1140px]">
          <h1 className="mb-12 text-center text-[28px] font-normal text-white">Sign Up #09</h1>
          <div className="flex justify-center">
            <SignupCard />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
