import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { HERO_SLIDES, MINI_ARTICLES } from '../data'

describe('Hero', () => {
  it('renders the featured slider with the first slide headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[0]!.title)
  })

  it('renders the first slide category badge and byline', () => {
    render(<Hero />)
    expect(screen.getAllByText(HERO_SLIDES[0]!.badge).length).toBeGreaterThan(0)
    expect(screen.getAllByText(HERO_SLIDES[0]!.byline).length).toBeGreaterThan(0)
  })

  it('moves to the next featured story', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next featured story' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO_SLIDES[1]!.title)
  })

  it('renders the mini article column', () => {
    render(<Hero />)
    for (const article of MINI_ARTICLES) {
      expect(screen.getByText(article.badge)).toBeInTheDocument()
      expect(screen.getAllByText(article.byline).length).toBeGreaterThan(0)
    }
  })
})
