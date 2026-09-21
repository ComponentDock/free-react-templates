import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Events } from './Events'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Events')
  })

  it('renders both event cards', () => {
    render(<Events />)
    expect(screen.getByText('Morning Meditation Workshop')).toBeInTheDocument()
    expect(screen.getByText('Yoga Teacher Training')).toBeInTheDocument()
  })

  it('displays dates', () => {
    render(<Events />)
    expect(screen.getByText('March 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('April 22, 2025')).toBeInTheDocument()
  })

  it('renders Read More buttons', () => {
    render(<Events />)
    const readMoreButtons = screen.getAllByText('Read More')
    expect(readMoreButtons.length).toBe(2)
  })
})
