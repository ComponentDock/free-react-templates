import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroImage } from '../data'

describe('Hero', () => {
  it('renders a level-1 heading centered over the background image with a serif-italic accent word', () => {
    const { container } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/My personal journey for/)
    expect(heading.textContent).toMatch(/inspiration/)
    const accent = screen.getByText('inspiration')
    expect(accent.tagName).toBe('EM')
    expect(accent.className).toContain('font-serif')
    expect(accent.className).toContain('italic')
    const section = container.querySelector('section')
    expect(section?.className).toContain('min-h-[90vh]')
  })

  it('shows the full-viewport background image with an overlay', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('img', { name: heroImage.alt })).toHaveAttribute('src', heroImage.src)
    const overlay = container.querySelector('[aria-hidden="true"]')
    expect(overlay?.className).toContain('bg-charcoal/60')
  })

  it('does not render a call-to-action button', () => {
    render(<Hero />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
