import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the tagline, headline, copy and gradient CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 4, name: hero.tagline })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toBeInTheDocument()
    expect(screen.getByText(hero.copy)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta).toHaveStyle({ background: 'linear-gradient(to right, #244cfd, #15e4fd)' })
  })

  it('uses the hero image as a cover background', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section') as HTMLElement
    expect(section).toHaveStyle({ backgroundImage: `url(${hero.image})` })
  })
})
