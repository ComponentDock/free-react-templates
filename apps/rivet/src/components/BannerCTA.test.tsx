import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BannerCTA } from './BannerCTA'

describe('BannerCTA', () => {
  it('renders the heading', () => {
    render(<BannerCTA />)
    expect(screen.getByText(/Trusted Construction & Development Since 1889/)).toBeInTheDocument()
  })

  it('renders the Get A Quote button', () => {
    render(<BannerCTA />)
    expect(screen.getByRole('link', { name: 'Get A Quote' })).toBeInTheDocument()
  })
})
