import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the headline', () => {
    render(<CTABanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Want To Work With Us?')
  })

  it('renders subtext and CTA button', () => {
    render(<CTABanner />)
    expect(screen.getByText(/Join our team/)).toBeInTheDocument()
    expect(screen.getByText('Get Involved')).toBeInTheDocument()
  })
})
