import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the headline, subtext and both CTAs', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: "You don't need a silver fork to eat good food." }),
    ).toBeInTheDocument()
    expect(screen.getByText(hero.subtext)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See Our Menu' })).toHaveAttribute('href', '#offers')
    expect(screen.getByRole('link', { name: 'Special Offers' })).toHaveAttribute('href', '#offers')
  })

  it('shows the food photo', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: 'Table set with a roast dinner' })
    expect(img).toHaveAttribute('src', hero.image)
  })
})
