import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Step Into Your Style/ }),
    ).toBeInTheDocument()
  })

  it('renders the subtext about premium footwear', () => {
    render(<Hero />)
    expect(screen.getByText(/premium footwear/)).toBeInTheDocument()
  })

  it('renders the Shop Now CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Shop Now/ })).toHaveAttribute('href', '#shop')
  })

  it('renders the Browse Categories link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Browse Categories/ })).toHaveAttribute(
      'href',
      '#categories',
    )
  })

  it('renders all four stats', () => {
    render(<Hero />)
    expect(screen.getByText('50K+')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('300+')).toBeInTheDocument()
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('Shipping over $75')).toBeInTheDocument()
  })
})
