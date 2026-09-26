import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Framecast')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/World class consumer and trends research/)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Crafting digital experiences/)).toBeInTheDocument()
  })

  it('has a dark background section', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-dark')
  })
})
