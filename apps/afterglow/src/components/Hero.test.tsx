import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { ACTIONS, HERO_ID, HEADLINE, NOTE, RATING_TEXT, STARS, SUB } from '../data/hero'

describe('Hero', () => {
  it('is one section labelled by its own h1', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    const heading = screen.getByRole('heading', { level: 1 })

    expect(section).toHaveAttribute('id', HERO_ID)
    expect(section).toHaveAttribute('aria-labelledby', heading.id)
    expect(heading).toHaveTextContent(HEADLINE)
  })

  it('shows the rating as text with five decorative stars', () => {
    const { container } = render(<Hero />)
    const rating = container.querySelector('.ag-rating')!
    const stars = container.querySelector('.ag-stars')!

    expect(rating).toHaveTextContent(RATING_TEXT)
    expect(stars).toHaveAttribute('aria-hidden', 'true')
    expect(stars.querySelectorAll('svg')).toHaveLength(STARS)
  })

  it('renders the sub-copy and the free-plan note', () => {
    render(<Hero />)

    expect(screen.getByText(SUB)).toBeInTheDocument()
    expect(screen.getByText(NOTE)).toBeInTheDocument()
  })

  it('renders two pill links with real destinations and a decorative arrow', () => {
    const { container } = render(<Hero />)
    const primary = screen.getByRole('link', { name: ACTIONS.primary.label })
    const ghost = screen.getByRole('link', { name: ACTIONS.ghost.label })

    expect(primary).toHaveTextContent(ACTIONS.primary.label)
    expect(primary).toHaveAttribute('href', ACTIONS.primary.href)
    expect(primary).toHaveClass('ag-cta')
    expect(primary.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')

    expect(ghost).toHaveTextContent(ACTIONS.ghost.label)
    expect(ghost).toHaveAttribute('href', ACTIONS.ghost.href)
    expect(ghost).toHaveClass('ag-ghost')

    expect(container.querySelectorAll('a')).toHaveLength(2)
  })
})
