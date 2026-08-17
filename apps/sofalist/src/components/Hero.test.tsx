import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO } from '../data'

describe('Hero', () => {
  it('renders the headline with the emphasized phrase and paragraph', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe(HERO.headline)
    expect(heading.querySelector('span')).toHaveTextContent(HERO.emphasis)
    expect(screen.getByText(HERO.text)).toBeInTheDocument()
  })

  it('renders the white Discover pill CTA with the hero photo', () => {
    render(<Hero />)
    const button = screen.getByRole('link', { name: HERO.ctaLabel })
    expect(button).toHaveAttribute('href', '#collection')
    expect(button.className).toContain('bg-paper')
    expect(screen.getByRole('img', { name: 'Furniture collection showcase' })).toHaveAttribute(
      'src',
      HERO.image,
    )
  })
})
