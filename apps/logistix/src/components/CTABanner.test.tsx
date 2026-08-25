import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTABanner } from './CTABanner'

describe('CTABanner', () => {
  it('renders the CTA heading', () => {
    render(<CTABanner />)
    expect(screen.getByText('Need Help? Get Free quote!')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CTABanner />)
    expect(screen.getByText(/Praesent eu rhoncus nibh/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<CTABanner />)
    expect(screen.getByRole('link', { name: /Learn More/ })).toBeInTheDocument()
  })
})
