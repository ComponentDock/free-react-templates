import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the collection subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/spring \/ summer collection 2025/i)).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /get up to 30% off/i })).toBeInTheDocument()
  })

  it('renders the shop now CTA', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /shop now/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#shop')
  })

  it('renders with background image styling', () => {
    render(<Hero />)
    const section = document.querySelector('section')
    expect(section).toBeTruthy()
    expect(section?.getAttribute('style')).toContain('background-image')
  })
})
