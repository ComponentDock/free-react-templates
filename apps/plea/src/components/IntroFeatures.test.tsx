import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroFeatures } from './IntroFeatures'

describe('IntroFeatures', () => {
  it('renders all three feature titles', () => {
    render(<IntroFeatures />)
    expect(screen.getByText('100% Confidential')).toBeInTheDocument()
    expect(screen.getByText('Qualified Team')).toBeInTheDocument()
    expect(screen.getByText('Individual Approach')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<IntroFeatures />)
    expect(screen.getByText(/strictly confidential/)).toBeInTheDocument()
    expect(screen.getByText(/years of experience/)).toBeInTheDocument()
    expect(screen.getByText(/tailor every session/)).toBeInTheDocument()
  })
})
