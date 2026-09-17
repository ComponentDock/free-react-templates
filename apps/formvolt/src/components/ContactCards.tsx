import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ContactForm } from './ContactForm'

export function ContactCards() {
  const [leftMode, setLeftMode] = useState<'hi' | 'quote'>('hi')
  const [rightMode, setRightMode] = useState<'hi' | 'quote'>('quote')

  return (
    <div
      className="flex w-full max-w-4xl flex-col items-center gap-6 px-4 sm:flex-row sm:items-stretch sm:justify-center"
      data-testid="contact-cards"
    >
      {/* Left card — Say Hi */}
      <div
        className={cn(
          'w-full max-w-sm rounded-lg p-8',
          'bg-gradient-to-b from-card-start to-card-end',
          'shadow-lg',
        )}
        data-testid="card-hi"
      >
        <h2 className="mb-6 text-center text-2xl font-bold">CONTACT US</h2>

        <div className="mb-6 flex items-center gap-4" data-testid="radio-hi">
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="radio"
              name="left-mode"
              checked={leftMode === 'hi'}
              onChange={() => setLeftMode('hi')}
              className="accent-white"
            />
            Say Hi
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="radio"
              name="left-mode"
              checked={leftMode === 'quote'}
              onChange={() => setLeftMode('quote')}
              className="accent-white"
            />
            Get a Quote
          </label>
        </div>

        <ContactForm mode={leftMode} />
      </div>

      {/* Right card — Get a Quote */}
      <div
        className={cn(
          'w-full max-w-sm rounded-lg p-8',
          'bg-gradient-to-b from-card-start to-card-end',
          'shadow-lg',
        )}
        data-testid="card-quote"
      >
        <h2 className="mb-6 text-center text-2xl font-bold">CONTACT US</h2>

        <div className="mb-6 flex items-center gap-4" data-testid="radio-right">
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="radio"
              name="right-mode"
              checked={rightMode === 'hi'}
              onChange={() => setRightMode('hi')}
              className="accent-white"
            />
            Say Hi
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="radio"
              name="right-mode"
              checked={rightMode === 'quote'}
              onChange={() => setRightMode('quote')}
              className="accent-white"
            />
            Get a Quote
          </label>
        </div>

        <ContactForm mode={rightMode} />
      </div>
    </div>
  )
}
