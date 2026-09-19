import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BenefitsStrip } from './BenefitsStrip'

describe('BenefitsStrip', () => {
  it('renders all four benefit titles', () => {
    render(<BenefitsStrip />)
    expect(screen.getByText('Free Shipping')).toBeInTheDocument()
    expect(screen.getByText('60-Day Returns')).toBeInTheDocument()
    expect(screen.getByText('Size Guarantee')).toBeInTheDocument()
    expect(screen.getByText('Secure Checkout')).toBeInTheDocument()
  })

  it('renders benefit descriptions', () => {
    render(<BenefitsStrip />)
    expect(screen.getByText(/Free standard shipping/)).toBeInTheDocument()
    expect(screen.getByText(/Return within 60 days/)).toBeInTheDocument()
    expect(screen.getByText(/exchange your shoes/)).toBeInTheDocument()
    expect(screen.getByText(/industry-leading encryption/)).toBeInTheDocument()
  })

  it('renders a section element', () => {
    const { container } = render(<BenefitsStrip />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })
})
