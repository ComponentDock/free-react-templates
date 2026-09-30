import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { hero } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtext', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain(hero.headline)
    expect(screen.getByText(hero.subtext)).toBeInTheDocument()
  })

  it('renders the five countdown units', () => {
    render(<Hero />)
    for (const label of ['Weeks', 'Days', 'Hr', 'Min', 'Sec']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders the Book Ticket CTA and Learn More link', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveClass('bg-brand', 'uppercase')
    expect(screen.getByRole('link', { name: hero.secondary })).toBeInTheDocument()
  })

  it('uses a deterministic placeholder hero image with a dark overlay', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('img')).toHaveAttribute('src', hero.image)
    expect(container.querySelector('img')).toHaveAttribute('alt', '')
    expect(container.querySelector('.bg-black\\/60')).not.toBeNull()
  })
})
