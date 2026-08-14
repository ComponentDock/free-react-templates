import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the eyebrow, uppercase name headline, intro and CTA', () => {
    render(<Hero />)
    expect(screen.getByText(hero.eyebrow)).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Philip Gilbert/)
    expect(screen.getByText(hero.intro)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: hero.cta })
    expect(cta).toHaveAttribute('href', '#about')
  })

  it('shows a framed portrait photo on the right', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: hero.alt })
    expect(image).toHaveAttribute('src', hero.portrait)
    expect(screen.getByLabelText('Hero')).toBeInTheDocument()
  })
})
