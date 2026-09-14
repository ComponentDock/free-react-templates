import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, blurbs, and CTAs', () => {
    render(<Hero />)
    expect(screen.getByText('Go Solar Today')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Power Your Home With Clean Energy/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Free Quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call \(555\) 123-4567/i })).toBeInTheDocument()
  })

  it('renders social proof stats', () => {
    render(<Hero />)
    expect(screen.getByText('25,000+ Trees Saved')).toBeInTheDocument()
    expect(screen.getByText('8,500+ Tons CO2 Offset')).toBeInTheDocument()
  })

  it('renders the savings calculator card', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: 'Estimate Your Savings' })).toBeInTheDocument()
    expect(screen.getByRole('slider')).toBeInTheDocument()
    expect(screen.getByLabelText('State')).toBeInTheDocument()
  })
})
