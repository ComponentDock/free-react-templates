import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the headline, subtext and pill-shaped Get Started button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'We Are The Best Consulting Agency' }),
    ).toBeInTheDocument()
    expect(screen.getByText(hero.subtext)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Get Started' })
    expect(cta).toHaveAttribute('href', '#about')
    expect(cta).toHaveClass('rounded-full', 'bg-brand')
  })

  it('applies the cover photo as a background and renders the dark overlay', () => {
    render(<Hero />)
    const section = screen.getByTestId('hero')
    expect(section.style.backgroundImage).toContain(hero.image)
    expect(screen.getByTestId('hero-overlay')).toHaveClass('bg-black/20')
  })
})
