import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the eyebrow, headline, two paragraphs, and More About Us button', () => {
    render(<About />)
    expect(screen.getByText('About Our Company')).toHaveClass('text-accent')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Safe Logistic & Transport Solutions That Save Your Valuable Time!',
    )
    expect(screen.getByText(/named coordinator/)).toBeInTheDocument()
    expect(screen.getByText(/single pallet to full truckloads/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More About Us' })).toHaveAttribute('href', '#quote')
  })

  it('renders the layered offset image composition with seeded placeholders', () => {
    const { container } = render(<About />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(3)
    for (const image of images) {
      expect(image.getAttribute('src')).toContain('picsum.photos/seed/vitesse-about-')
    }
  })
})
