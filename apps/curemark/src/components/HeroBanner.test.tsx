import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  it('renders the main heading', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Best Medical Services')
  })

  it('renders the subtitle paragraph', () => {
    render(<HeroBanner />)
    expect(screen.getByText(/comprehensive healthcare solutions/i)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('has proper aria-label', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('region', { name: /hero banner/i })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<HeroBanner />)
    const bgDiv = document.querySelector('[style*="picsum.photos/seed/curemark-hero"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
