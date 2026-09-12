import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and both call-to-action buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Creative Studio/)

    expect(screen.getByRole('link', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Portfolio' })).toBeInTheDocument()
  })

  it('shows a decorative hero background image', () => {
    render(<Hero />)

    const bgImage = document.querySelector('[style*="picsum.photos"]')
    expect(bgImage).toBeInTheDocument()
    expect(bgImage?.getAttribute('style')).toContain('mortar-hero')
  })
})
