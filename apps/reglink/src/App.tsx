import { useState, useCallback, type FormEvent, type ChangeEvent } from 'react'
import { useEffect } from 'react'
import { StepSidebar } from './components/StepSidebar'
import { PersonalInfo } from './components/PersonalInfo'
import { BankAccount } from './components/BankAccount'
import { FinancialGoals } from './components/FinancialGoals'
import { NavigationBar } from './components/NavigationBar'
import { Footer } from './components/Footer'

export function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedBank, setSelectedBank] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('')

  useEffect(() => {
    document.title = 'Reglink — Registration Wizard Template'
  }, [])

  const handleNext = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, 3))
  }, [])

  const handleBack = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 1))
  }, [])

  const handleFinish = useCallback(() => {
    // Submission placeholder
  }, [])

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }, [])

  const handleBankSelect = useCallback((bankId: string) => {
    setSelectedBank(bankId)
  }, [])

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  const handlePlanSelect = useCallback((planId: string) => {
    setSelectedPlan(planId)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[var(--color-brand-start)] to-[var(--color-brand-end)] p-4">
      <div className="flex w-full max-w-[820px] overflow-hidden rounded-[10px] shadow-[0px_8px_20px_rgba(0,0,0,0.15)] max-md:flex-col">
        <StepSidebar currentStep={currentStep} />

        <div className="flex w-[540px] flex-col bg-[var(--color-card-bg)] p-[50px] max-md:w-full max-md:p-6">
          <div key={currentStep} className="animate-[fadeIn_0.3s_ease-in-out]">
            {currentStep === 1 && <PersonalInfo onSubmit={handleFormSubmit} />}
            {currentStep === 2 && (
              <BankAccount
                selectedBank={selectedBank}
                onBankSelect={handleBankSelect}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            )}
            {currentStep === 3 && (
              <FinancialGoals selectedPlan={selectedPlan} onPlanSelect={handlePlanSelect} />
            )}
          </div>

          <NavigationBar
            currentStep={currentStep}
            onBack={handleBack}
            onNext={handleNext}
            onFinish={handleFinish}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
