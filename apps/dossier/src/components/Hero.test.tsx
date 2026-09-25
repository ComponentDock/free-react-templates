import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the name heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Howdy, I'm Alex Morgan")
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/A Product Designer/)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('More On Me')).toBeInTheDocument()
    expect(screen.getByText('Hire Me')).toBeInTheDocument()
  })

  it('has a dark overlay div', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('.bg-black\\/50')
    expect(overlay).toBeInTheDocument()
  })
})
