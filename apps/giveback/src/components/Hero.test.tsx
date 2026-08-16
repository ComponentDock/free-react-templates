import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the headline, supporting paragraph, and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toBeInTheDocument()
    expect(screen.getByText(hero.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.cta })).toHaveAttribute('href', '#causes')
  })

  it('shows the background image', () => {
    render(<Hero />)
    const img = screen.getByAltText(/helping hand/i)
    expect(img).toHaveAttribute('src', hero.image)
  })
})
