import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows a level-1 heading "Spa Which You Love" in a serif font', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Spa Which You Love')
    expect(heading.className).toContain('font-serif')
  })

  it('shows a paragraph of supporting copy', () => {
    render(<Hero />)

    expect(screen.getByText(/relax, restore, and renew/i)).toBeInTheDocument()
  })

  it('shows a "Learn More" pill button in the brand peach color', () => {
    render(<Hero />)

    const button = screen.getByRole('link', { name: 'Learn More' })
    expect(button).toHaveAttribute('href', '#about')
    expect(button.className).toContain('rounded-full')
    expect(button.className).toContain('bg-brand')
  })

  it('renders a background image with a dark overlay', () => {
    const { container } = render(<Hero />)

    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/halcyon-hero'),
    )
    expect(container.querySelector('[aria-hidden="true"]')).toHaveClass('bg-black/30')
  })
})
