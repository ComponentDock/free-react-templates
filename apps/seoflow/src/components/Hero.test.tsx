import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/BoostUp your Business/i)).toBeInTheDocument()
  })

  it('renders the Get Started CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })

  it('links the CTA to services section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toHaveAttribute('href', '#services')
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /seo analytics illustration/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
