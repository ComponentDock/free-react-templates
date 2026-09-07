import { useState, useCallback } from 'react'
import { RatingsStep } from './components/RatingsStep'
import { ReviewStep } from './components/ReviewStep'
import { ContactStep } from './components/ContactStep'
import { StepFooter } from './components/StepFooter'
import { Footer } from './components/Footer'

const TOTAL_STEPS = 3

export function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [ratings, setRatings] = useState<Record<string, number>>({
    quality: 3,
    ease: 3,
    features: 3,
    support: 3,
    value: 3,
  })

  const handleNext = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0))
  }, [])

  const handleFinish = useCallback(() => {
    setCompleted(true)
  }, [])

  const handleRatingChange = useCallback((category: string, value: number) => {
    setRatings((prev) => ({ ...prev, [category]: value }))
  }, [])

  return (
    <div className="min-h-screen bg-page flex flex-col items-center justify-center px-4 py-[185px]">
      <div className="w-full max-w-[990px] bg-panel rounded-[10px] shadow-[0px_5px_9.5px_0.5px_rgba(0,0,0,0.08)] relative">
        {/* Step indicator badge */}
        {!completed && (
          <div className="absolute top-[-30px] right-[-35px] w-[110px] h-[110px] rounded-full overflow-hidden z-10">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: `linear-gradient(180deg, #43d7ba ${70 - currentStep * 20}%, #1abc9c ${30 + currentStep * 20}%)`,
              }}
            >
              <span className="text-white font-button text-center leading-tight">
                <span className="block text-[33px] font-bold mt-[-8px]">
                  {String(currentStep + 1).padStart(2, '0')}
                </span>
                <span className="text-[14px]">/{String(TOTAL_STEPS).padStart(2, '0')}</span>
              </span>
            </div>
          </div>
        )}

        <div className="p-[0px_110px_0px_85px]">
          {completed ? (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <p className="text-accent text-xl font-bold font-button mb-4">Thank You!</p>
              <p className="text-muted text-sm">Your feedback has been submitted successfully.</p>
            </div>
          ) : (
            <form className="relative">
              <div className="min-h-[400px] pt-[95px]">
                {currentStep === 0 && (
                  <RatingsStep ratings={ratings} onRatingChange={handleRatingChange} />
                )}
                {currentStep === 1 && <ReviewStep />}
                {currentStep === 2 && <ContactStep />}
              </div>

              <StepFooter
                currentStep={currentStep}
                totalSteps={TOTAL_STEPS}
                onNext={handleNext}
                onPrev={handlePrev}
                onFinish={handleFinish}
              />
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
