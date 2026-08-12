import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, search CTA, and scroll indicator', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /find properties that make you money/i }),
    ).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Search Properties' })
    expect(cta).toHaveAttribute('href', '#search')

    const scrollLink = screen.getByRole('link', { name: /scroll to search/i })
    expect(scrollLink).toHaveAttribute('href', '#search')
  })

  it('uses a decorative background image', () => {
    const { container } = render(<Hero />)

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('alt', '')
    expect(img?.getAttribute('src')).toMatch(/picsum\.photos/)
  })
})
