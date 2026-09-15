import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders hero slides with titles and CTAs', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Welcome to Stratum')).toBeInTheDocument()
    expect(screen.getByText(/Powering the future of mining/)).toBeInTheDocument()
    const ctaButtons = screen.getAllByText('Get in touch')
    expect(ctaButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders background images', () => {
    render(<HeroSlider />)
    const sections = document.querySelectorAll('[style*="background-image"]')
    expect(sections.length).toBeGreaterThanOrEqual(1)
  })
})
