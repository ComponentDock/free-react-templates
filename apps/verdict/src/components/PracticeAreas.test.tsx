import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('shows the section heading and all six practice area cards', () => {
    render(<PracticeAreas />)

    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Practice Areas' })).toBeInTheDocument()

    for (const area of [
      'Corporate Law',
      'Litigation',
      'Real Estate',
      'Family Law',
      'Estate Planning',
      'Criminal Defense',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: area })).toBeInTheDocument()
    }
  })

  it('gives every card a Learn More link', () => {
    render(<PracticeAreas />)

    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(6)
  })

  it('points the section id at services for navbar anchors', () => {
    const { container } = render(<PracticeAreas />)

    expect(container.querySelector('section#services')).not.toBeNull()
  })
})
