import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HERO } from '../content'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, the headline and the violet second sentence', () => {
    render(<Hero />)
    expect(screen.getByText(HERO.eyebrow)).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('We measure first.')
    const accent = screen.getByText(HERO.headlineAccent)
    expect(accent.tagName).toBe('SPAN')
    expect(accent.className).toContain('text-primary-600')
  })

  it('shows the rating line and the four checks', () => {
    render(<Hero />)
    expect(screen.getByText(HERO.score)).toBeInTheDocument()
    expect(screen.getByText(HERO.reviews)).toBeInTheDocument()
    HERO.checks.forEach((check) => {
      expect(screen.getByText(check)).toBeInTheDocument()
    })
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
  })

  it('pairs the copy with the booking card in the right column', () => {
    const { container } = render(<Hero />)
    const columns = container.querySelectorAll('.lg\\:col-span-7, .lg\\:col-span-5')
    expect(columns).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 2, name: 'Book an air assessment' })).toBeInTheDocument()
    expect(document.getElementById('hero-form')).not.toBeNull()
  })
})
