import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Feature } from './Feature'

describe('Feature', () => {
  it('renders the heading', () => {
    render(<Feature />)
    expect(screen.getByText('We Are a Trusted Name In Auto')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Feature />)
    expect(screen.getByText(/years of experience in the automotive industry/)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Feature />)
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Partners' })).toBeInTheDocument()
  })

  it('renders all 6 feature items', () => {
    render(<Feature />)
    const labels = ['Engine', 'Turbo', 'Cooling', 'Suspension', 'Electrical', 'Brakes']
    for (const label of labels) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('has light gray section background', () => {
    const { container } = render(<Feature />)
    const section = container.querySelector('.bg-section-light')
    expect(section).toBeInTheDocument()
  })
})
