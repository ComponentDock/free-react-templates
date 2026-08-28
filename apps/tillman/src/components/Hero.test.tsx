import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Agricultural solution')
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(/High-performing products/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    const btn = screen.getByRole('link', { name: /Explore Our Services/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#services')
  })
})
