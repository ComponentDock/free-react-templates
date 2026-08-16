import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline with a highlighted word, subtext and Explore More CTA', () => {
    const { container } = render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Unlocking the potential of those who advance the world')
    expect(heading.querySelector('span')).toHaveClass('text-brand')
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore More' })).toHaveAttribute('href', '#about')
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('statecraft-hero'),
    )
  })

  it('renders the decorative watermark', () => {
    render(<Hero />)
    expect(screen.getByText('Statecraft')).toBeInTheDocument()
  })
})
