import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subheading, headline, subtext, and green CTA', () => {
    render(<Hero />)

    expect(screen.getByText('Web Hosting')).toBeInTheDocument()

    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline.textContent).toBe('Best Web Hosting For Your Website')

    expect(
      screen.getByText("Get best speed for your website. Don't lose more clients"),
    ).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Get Started Now' })
    expect(cta).toBeInTheDocument()
    expect(cta.className).toContain('bg-accent-500')
  })
})
