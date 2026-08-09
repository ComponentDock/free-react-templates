import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections in the expected order and sets the document title', () => {
    const { container } = render(<App />)
    expect(document.title).toBe('Moda — Fashion & Lifestyle')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Elevate Your Everyday Style',
    )
    // section headings in the main landmark, in the spec's exact order
    const headings = Array.from(container.querySelectorAll('main h2')).map((node) =>
      node.textContent?.trim(),
    )
    expect(headings).toEqual([
      'Featured Products',
      'Shop by Category',
      'Just Dropped',
      'Season Sale',
      'What Our Customers Say',
      'Get 20% Off Your First Order',
    ])
    // announcement bar renders above the header, testimonials inside main
    const main = container.querySelector('main')!
    expect(container.textContent).toContain('Free shipping on orders over $100')
    expect(main.textContent).toContain('Trustpilot')
  })
})
