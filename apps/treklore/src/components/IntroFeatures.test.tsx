import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { IntroFeatures } from './IntroFeatures'

describe('IntroFeatures', () => {
  it('renders all feature titles', () => {
    render(<IntroFeatures />)
    expect(screen.getByText('Top Destinations')).toBeInTheDocument()
    expect(screen.getByText('The Best Prices')).toBeInTheDocument()
    expect(screen.getByText('Amazing Services')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<IntroFeatures />)
    expect(screen.getByText(/breathtaking destinations/)).toBeInTheDocument()
    expect(screen.getByText(/best prices/)).toBeInTheDocument()
    expect(screen.getByText(/dedicated team/)).toBeInTheDocument()
  })

  it('renders icons', () => {
    render(<IntroFeatures />)
    // lucide icons render as SVGs
    const svgs = document.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(3)
  })
})
