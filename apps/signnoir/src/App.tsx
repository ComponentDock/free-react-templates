import { SignupWrap } from './components/SignupWrap'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-page-bg px-4 py-28">
      <div className="w-full max-w-[1140px]">
        <h1 className="mb-12 text-center text-[28px] font-normal text-white">Sign Up #10</h1>
        <div className="mx-auto w-full max-w-[950px]">
          <SignupWrap />
        </div>
      </div>
      <Footer />
    </div>
  )
}
