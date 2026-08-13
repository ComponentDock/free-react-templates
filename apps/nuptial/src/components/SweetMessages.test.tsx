import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SweetMessages } from './SweetMessages'

describe('SweetMessages', () => {
  it('shows the heading and at least three testimonial cards', () => {
    const { container } = render(<SweetMessages />)
    expect(screen.getByRole('heading', { name: 'Sweet Messages' })).toBeInTheDocument()
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText('Grace Whitfield')).toBeInTheDocument()
    expect(screen.getByText('Wedding Planner')).toBeInTheDocument()
    expect(screen.getByText('Daniel Hayes')).toBeInTheDocument()
    expect(screen.getByText('Best Man')).toBeInTheDocument()
  })

  it('renders a quote for every testimonial', () => {
    render(<SweetMessages />)
    const quotes = screen.getAllByText(/lucky|joy|beautiful|blessing|magic|heart/i)
    expect(quotes.length).toBeGreaterThanOrEqual(3)
  })
})
