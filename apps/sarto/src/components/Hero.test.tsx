import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Fashion for/)
  })

  it('renders the subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover the latest trends/)).toBeInTheDocument()
  })

  it('renders the View Collection CTA', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'View Collection' })
    expect(cta).toHaveAttribute('href', '#shop')
  })
})
