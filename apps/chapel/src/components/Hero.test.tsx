import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the heading, paragraph, and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: hero.heading })).toBeInTheDocument()
    expect(screen.getByText(hero.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.ctaLabel })).toBeInTheDocument()
  })

  it('has the background image set via style', () => {
    render(<Hero />)
    const section = document.querySelector('[id="home"]')
    expect(section).toHaveStyle({ backgroundImage: `url('${hero.image}')` })
  })
})
