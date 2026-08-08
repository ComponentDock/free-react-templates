import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the tagline, headline, sub-paragraph and scroll arrow', () => {
    render(<Hero />)

    expect(screen.getByText('Welcome to Sapor')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Authentic Italian Cuisine' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/since 1985/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Scroll down' })).toBeInTheDocument()
  })

  it('shows both CTAs linking to their sections', () => {
    render(<Hero />)

    const reserve = screen.getByRole('link', { name: 'Reserve a Table' })
    expect(reserve).toHaveAttribute('href', '#reservations')

    const menu = screen.getByRole('link', { name: 'View Our Menu' })
    expect(menu).toHaveAttribute('href', '#menu')
  })
})
