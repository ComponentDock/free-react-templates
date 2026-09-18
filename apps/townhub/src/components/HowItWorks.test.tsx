import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'
import { howItWorksSteps } from '../data'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Every Month, Millions of People',
    )
  })

  it('renders the script accent text', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How It Works')).toBeInTheDocument()
  })

  it('renders all 3 step cards', () => {
    render(<HowItWorks />)
    for (const step of howItWorksSteps) {
      expect(screen.getByText(step.title)).toBeInTheDocument()
      expect(screen.getByText(step.number)).toBeInTheDocument()
      expect(screen.getByText(step.description)).toBeInTheDocument()
    }
  })

  it('has dark background styling', () => {
    const { container } = render(<HowItWorks />)
    expect(container.firstElementChild?.className).toContain('bg-deep')
  })
})
