import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { hero } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the date line and headline centered on the photo', () => {
    render(<Hero />)
    expect(screen.getByText(hero.date)).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain(hero.headline)
    expect(screen.getByText(hero.headline)).toBeInTheDocument()
  })

  it('renders the square More Details CTA', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveClass('bg-brand')
    expect(cta).toHaveClass('uppercase')
    expect(cta).toHaveAttribute('href', '#schedule')
  })

  it('uses a deterministic placeholder hero image with a dark overlay', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('img')).toHaveAttribute('src', hero.image)
    expect(container.querySelector('img')).toHaveAttribute('alt', '')
    expect(container.querySelector('.bg-black\\/60')).not.toBeNull()
  })
})
