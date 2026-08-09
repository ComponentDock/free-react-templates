import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the heading and the four numbered steps', () => {
    render(<HowItWorks />)

    expect(screen.getByRole('heading', { name: 'Get Started in Minutes' })).toBeInTheDocument()

    for (const step of [
      'Connect Your Accounts',
      'Tell Finley Your Goals',
      'Get Your Personalized Plan',
      'Automate & Grow',
    ]) {
      expect(screen.getByRole('heading', { name: step })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
  })

  it('shows a Start Your Free Trial button below the steps', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('link', { name: 'Start Your Free Trial' })).toBeInTheDocument()
  })
})
