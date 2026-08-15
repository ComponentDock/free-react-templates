import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroCtaLabel, heroLead, heroTitle } from '../data'

describe('Hero', () => {
  it('renders the headline, supporting paragraph, and white outline Get Started button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroTitle)
    expect(screen.getByText(heroLead)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: heroCtaLabel })
    expect(cta).toHaveAttribute('href', '#')
    expect(cta.className).toMatch(/border-2/)
    expect(cta.className).toMatch(/border-white/)
  })
})
