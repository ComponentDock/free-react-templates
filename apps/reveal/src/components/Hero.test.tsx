import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Reveal')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Product Designer Based In San Francisco/)).toBeInTheDocument()
  })

  it('renders a scroll link', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Scroll to portfolio section')).toBeInTheDocument()
  })
})
