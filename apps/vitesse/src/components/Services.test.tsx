import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the centered title with the orange eyebrow', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toHaveClass('text-accent')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What We Can Do For You')
  })

  it('renders three bordered transport category cards with icon, title, blurb, and link', () => {
    render(<Services />)
    for (const title of ['Land Transport', 'Ship Transport', 'Air Transport']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    const links = screen.getAllByRole('link', { name: /Read More/ })
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#quote')
    }
    expect(screen.getByText(/named driver and live tracking/)).toBeInTheDocument()
    expect(screen.getByText(/ocean lanes/)).toBeInTheDocument()
    expect(screen.getByText(/scheduled flights/)).toBeInTheDocument()
  })
})
