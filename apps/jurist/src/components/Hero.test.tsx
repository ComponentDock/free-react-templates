import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Fight For Justice')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Dedicated legal professionals/)).toBeDefined()
  })

  it('renders the Get Started CTA', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
