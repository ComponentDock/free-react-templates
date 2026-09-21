import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the heading', () => {
    render(<CTABanner />)
    expect(screen.getByText(/Apply for a Loan for your startup/)).toBeInTheDocument()
  })

  it('renders the Apply Now button', () => {
    render(<CTABanner />)
    expect(screen.getByText('Apply Now')).toBeInTheDocument()
  })
})
