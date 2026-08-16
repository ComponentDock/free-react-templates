import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the serif headline with a copper accent, subtext and CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Handmade "Cookies" and Coffee Delights' }),
    ).toBeInTheDocument()
    expect(screen.getByText('"Cookies"')).toHaveClass('text-copper')
    expect(screen.getByText(new RegExp(hero.text.slice(0, 30)))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Menu' })).toHaveAttribute('href', '#menu')
  })
})
