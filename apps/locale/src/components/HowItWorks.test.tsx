import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'
import { HOW_IT_WORKS_TITLE, STEPS } from '../lib/site'

describe('HowItWorks', () => {
  it('renders the heading and one card per step', () => {
    render(<HowItWorks />)

    expect(screen.getByRole('heading', { level: 2, name: HOW_IT_WORKS_TITLE })).toBeInTheDocument()
    expect(screen.getAllByTestId('step-card')).toHaveLength(STEPS.length)
  })

  it('renders each step title with its blurb and a glyph', () => {
    render(<HowItWorks />)

    for (const step of STEPS) {
      expect(screen.getByRole('heading', { level: 3, name: step.title })).toBeInTheDocument()
      expect(screen.getByText(step.blurb)).toBeInTheDocument()
    }

    expect(document.querySelectorAll('[data-testid="step-card"] svg')).toHaveLength(STEPS.length)
  })
})
