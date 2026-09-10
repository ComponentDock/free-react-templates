import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        name: /Entrepreneur\. Investor\. Marketing Extraordinaire/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the subtext paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/help businesses grow/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Explore Our Services/i })).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /Business professional/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('buzzer-hero'))
  })
})
