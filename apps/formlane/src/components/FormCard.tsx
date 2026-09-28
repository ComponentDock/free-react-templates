import { type FormEvent, useState } from 'react'
import { TabBar } from './TabBar'
import { SignUpForm } from './SignUpForm'
import { SignInForm } from './SignInForm'

export function FormCard() {
  const [activeTab, setActiveTab] = useState<'signup' | 'signin'>('signup')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="flex w-full max-w-[937px] flex-col overflow-hidden rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.15)] md:flex-row">
      {/* Left panel — hero image */}
      <div className="relative hidden w-full md:block md:w-[45%]">
        <img
          src="https://picsum.photos/seed/formlane-hero/480/600"
          alt="Registration illustration"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right panel — tab bar + form */}
      <div
        className="flex w-full flex-col px-8 py-10 md:w-[55%] md:px-12 md:py-8"
        style={{ backgroundColor: '#3D5983' }}
      >
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'signup' ? (
          <SignUpForm onSubmit={handleSubmit} />
        ) : (
          <SignInForm onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  )
}
