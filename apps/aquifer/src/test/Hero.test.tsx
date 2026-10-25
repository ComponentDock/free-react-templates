import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from '../components/Hero'
import { HERO_CHECKLIST, LICENCE } from '../data'

describe('Hero', () => {
  it('renders the eyebrow, the two-sentence headline and the lede', () => {
    render(<Hero />)

    expect(screen.getByText('Louisville · Licensed master plumber')).toHaveClass(
      'text-primary-700',
    )
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Find the leak first. Then open one hole, not six.')
    expect(heading.querySelector('span')).toHaveClass('text-primary-600')
    expect(screen.getByText(/A slab leak is not expensive because of the pipe/)).toBeVisible()
    expect(heading.closest('section')).toHaveClass('bg-ink-50')
  })

  it('shows the sample rating and the four static checklist items', () => {
    render(<Hero />)

    expect(screen.getByText(LICENCE.rating)).toBeInTheDocument()
    expect(screen.getByText(`${LICENCE.reviews} · sample data`)).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(HERO_CHECKLIST.length)

    HERO_CHECKLIST.forEach((item) => {
      expect(screen.getByText(item).closest('li')).not.toHaveAttribute('href')
    })
  })

  it('carries the booking card as its own heading level with no image', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 2, name: 'Book a leak location' })).toBeVisible()
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.queryByRole('img')).toBeNull()
    expect(document.getElementById('quote')).toHaveClass('rounded-2xl', 'shadow-md')
  })
})
