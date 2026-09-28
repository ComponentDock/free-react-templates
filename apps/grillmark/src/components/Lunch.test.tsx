import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Lunch } from './Lunch'

describe('Lunch', () => {
  it('renders the heading and description', () => {
    render(<Lunch />)
    const headings = screen.getAllByRole('heading', { name: /Daily Food Courses with Drinks/i })
    expect(headings.length).toBeGreaterThan(0)
    expect(screen.getByText(/Our lunch menu features/i)).toBeInTheDocument()
  })

  it('shows the chef testimonial', () => {
    render(<Lunch />)
    expect(screen.getByText('Walter White')).toBeInTheDocument()
    expect(screen.getByText('Head Chef')).toBeInTheDocument()
    expect(screen.getByText(/Every dish is crafted with passion/i)).toBeInTheDocument()
  })

  it('shows the chef avatar image', () => {
    render(<Lunch />)
    expect(screen.getByRole('img', { name: /Portrait of Head Chef/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
