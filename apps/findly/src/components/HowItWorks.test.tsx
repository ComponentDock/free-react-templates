import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'
import { STEPS } from '../data'

describe('HowItWorks', () => {
  it('renders the heading and the three steps with blurbs', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { level: 2, name: 'How It Work?' })).toBeInTheDocument()
    for (const step of STEPS) {
      expect(screen.getByRole('heading', { level: 5, name: step.title })).toBeInTheDocument()
      expect(screen.getByText(step.blurb)).toBeInTheDocument()
    }
  })
})
