import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Services')
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Mobile Optimize',
      'Increase Revenue',
      'Intuitive Idea',
      'Global Reach',
      'Data Driven',
      'Fast Performance',
    ]
    for (const t of titles) {
      expect(screen.getByText(t)).toBeInTheDocument()
    }
  })

  it('renders Learn More links for each service', () => {
    render(<Services />)
    const links = screen.getAllByText('Learn More')
    expect(links).toHaveLength(6)
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/beautifully on mobile devices/)).toBeInTheDocument()
  })
})
