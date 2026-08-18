import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the first testimonial with quote and founder', () => {
    render(<Testimonial />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByText(/festival in a way none of us expected/i)).toBeInTheDocument()
    expect(screen.getByText('Maya Lindqvist')).toBeInTheDocument()
    expect(screen.getByText('Event Producer')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Maya Lindqvist' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('cycles forward and wraps', () => {
    render(<Testimonial />)

    const next = screen.getByRole('button', { name: 'Next testimonial' })
    fireEvent.click(next)
    expect(screen.getByText('Daniel Reyes')).toBeInTheDocument()

    fireEvent.click(next)
    expect(screen.getByText('Ava Chen')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(next)
    expect(screen.getByText('Maya Lindqvist')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('cycles backward and wraps from the first to the last', () => {
    render(<Testimonial />)

    const prev = screen.getByRole('button', { name: 'Previous testimonial' })
    fireEvent.click(prev)
    expect(screen.getByText('Ava Chen')).toBeInTheDocument()

    fireEvent.click(prev)
    expect(screen.getByText('Daniel Reyes')).toBeInTheDocument()
  })

  it('jumps to a testimonial via the dots', () => {
    render(<Testimonial />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(screen.getByText('Daniel Reyes')).toBeInTheDocument()
    expect(screen.getByText(/wedding album is stunning/i)).toBeInTheDocument()
  })
})
