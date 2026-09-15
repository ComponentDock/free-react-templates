import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and description', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Bright App Landing')
    expect(screen.getByText(/inappropriate behavior/i)).toBeInTheDocument()
  })

  it('renders CTA button with arrow icon', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#about')
  })
})
