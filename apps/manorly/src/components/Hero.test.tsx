import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, the single level-1 headline and the supporting sentence', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Properties Now In City/)
    expect(screen.getByText('Dream')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('describes the photographic backdrop and hides the wash from assistive tech', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('img')).toHaveAttribute(
      'alt',
      'Aerial view of city apartment blocks between green terraces',
    )
    expect(screen.getByRole('img').getAttribute('src')).toContain('picsum.photos/seed/manorly-hero')
    const wash = container.querySelector('[aria-hidden="true"]')
    expect(wash).not.toBeNull()
    expect(wash?.className).toContain('linear-gradient')
  })
})
