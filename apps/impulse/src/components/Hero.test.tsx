import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/We are Impulse, we create great stuff/i)).toBeInTheDocument()
  })

  it('heading uses Abril Fatface font', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.className).toContain('font-display')
  })

  it('renders a dark overlay', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('.bg-black\\/30')
    expect(overlay).toBeInTheDocument()
  })

  it('has full viewport height', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    const section = heading.closest('section')
    expect(section).not.toBeNull()
    expect(section!.className).toContain('min-h-')
  })
})
