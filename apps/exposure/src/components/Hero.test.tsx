import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow with a leading line, the uppercase headline and the CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Creative Photographey')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Photography Make us happy Take a shot.')
    expect(screen.getByRole('link', { name: 'Watch Portfolio' })).toHaveAttribute(
      'href',
      '#portfolio',
    )
  })

  it('renders the hero background and portrait images', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: 'Hero' })
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('exposure-hero') })
    const portrait = document.querySelector('img[alt=""]')!
    expect(portrait).toHaveAttribute('src', expect.stringContaining('exposure-portrait'))
  })
})
