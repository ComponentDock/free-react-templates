import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  it('renders the main headline', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Foods the most precious things',
    )
  })

  it('renders Book Now and Watch Video CTAs', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('link', { name: /Book Now/i })).toBeInTheDocument()
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('shows feature icons (Fast Service, Fresh Food, 24/7 Support)', () => {
    render(<HeroBanner />)
    expect(screen.getByText('Fast Service')).toBeInTheDocument()
    expect(screen.getByText('Fresh Food')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })

  it('renders hero images with alt text', () => {
    render(<HeroBanner />)
    expect(screen.getByAltText('Restaurant dish 1')).toBeInTheDocument()
    expect(screen.getByAltText('Restaurant dish 2')).toBeInTheDocument()
  })

  it('has the home section id', () => {
    const { container } = render(<HeroBanner />)
    expect(container.querySelector('#home')).toBeInTheDocument()
  })
})
