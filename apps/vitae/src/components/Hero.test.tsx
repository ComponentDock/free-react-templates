import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the headline, lead and portfolio CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: hero.heading })).toBeInTheDocument()
    expect(screen.getByText(hero.lead)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveAttribute('href', hero.href)
  })

  it('renders the portrait photo', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: hero.alt })
    expect(image).toHaveAttribute('src', hero.image)
  })
})
