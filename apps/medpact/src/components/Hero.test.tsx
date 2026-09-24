import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroTitle, heroBlurb, heroCtaPrimary, heroCtaSecondary } from '../data'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroTitle)
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(heroBlurb)).toBeInTheDocument()
  })

  it('renders the primary CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: heroCtaPrimary })).toHaveAttribute(
      'href',
      '#appointment',
    )
  })

  it('renders the secondary CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: heroCtaSecondary })).toHaveAttribute(
      'href',
      '#services',
    )
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /doctor consulting/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'eager')
  })
})
