import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("We're your plumber")
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    const btn = screen.getByRole('link', { name: /Get Started/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#services')
  })
})
