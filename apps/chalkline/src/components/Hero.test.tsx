import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroStats } from '../data'

describe('Hero', () => {
  it('opens with the licence badge and the two-line headline', () => {
    render(<Hero />)

    expect(screen.getByText('Open source · AGPL-3.0')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/A learning platform your\s*institution actually owns/)
  })

  it('offers the filled, outlined and play affordances', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /Book a walkthrough/ })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'Read the docs' })).toHaveAttribute('href', '#standards')
    expect(screen.getByRole('button', { name: 'Watch the 4-minute tour' })).toBeInTheDocument()
  })

  it('renders four stats above the hairline rule', () => {
    render(<Hero />)

    const stats = screen.getAllByRole('definition').map((node) => node.textContent)
    expect(stats).toEqual(heroStats.map((stat) => stat.value))
    expect(screen.getByText('Thousand learners')).toBeInTheDocument()
  })

  it('frames a placeholder photograph rather than the source asset', () => {
    render(<Hero />)

    const image = screen.getByRole('img', { name: /library table/i })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/chalkline-1/1200/600')
  })
})
