import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'
import { HOW_IT_WORKS_CTA, STEPS } from '../data'

describe('HowItWorks', () => {
  it('renders the heading and the three steps with badges', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: 'How it Works' })).toBeInTheDocument()
    for (const step of STEPS) {
      expect(screen.getByText(step.badge)).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: step.title })).toBeInTheDocument()
      expect(screen.getByText(step.text)).toBeInTheDocument()
    }
  })

  it('renders the Learn More and Get A Request CTA buttons', () => {
    render(<HowItWorks />)
    const primary = screen.getByRole('link', { name: HOW_IT_WORKS_CTA.primary })
    expect(primary.className).toContain('bg-amber')
    const secondary = screen.getByRole('link', { name: HOW_IT_WORKS_CTA.secondary })
    expect(secondary.className).toContain('border-ink')
  })
})
