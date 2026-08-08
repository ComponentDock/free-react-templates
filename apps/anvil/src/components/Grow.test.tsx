import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Grow } from './Grow'

describe('Grow', () => {
  it('renders the heading, checklist, and testimonial', () => {
    render(<Grow />)
    expect(screen.getByRole('heading', { name: /Let's grow together/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Magnam iure fugit recusandae/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/John doe/i)).toBeInTheDocument()
    expect(screen.getByText(/XYZ Inc/i)).toBeInTheDocument()
  })

  it('renders the checklist items', () => {
    render(<Grow />)
    expect(screen.getAllByText(/Officiis laboriosam repudiandae/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Quis nostrum numquam/i).length).toBeGreaterThan(0)
  })
})
