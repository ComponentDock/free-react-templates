import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders four feature items', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: 'Professional Courses' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experienced Instructor' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Practical Training' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Validated Certificate' })).toBeInTheDocument()
  })

  it('renders descriptions', () => {
    render(<Features />)

    expect(screen.getByText(/industry-leading curriculum/i)).toBeInTheDocument()
    expect(screen.getByText(/learn from professionals/i)).toBeInTheDocument()
    expect(screen.getByText(/hands-on projects/i)).toBeInTheDocument()
    expect(screen.getByText(/earn recognized certificates/i)).toBeInTheDocument()
  })
})
