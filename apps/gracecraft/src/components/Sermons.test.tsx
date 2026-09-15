import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sermons } from './Sermons'

describe('Sermons', () => {
  it('displays section title and 3 sermon cards', () => {
    render(<Sermons />)
    expect(screen.getByRole('heading', { name: /sermons today/i })).toBeInTheDocument()
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
  })

  it('shows pastor names and categories for each sermon', () => {
    render(<Sermons />)
    expect(screen.getByText(/Josh Brighton/)).toBeInTheDocument()
    expect(screen.getByText(/Julia Amber/)).toBeInTheDocument()
    expect(screen.getByText(/Ashley Young/)).toBeInTheDocument()
    expect(screen.getAllByText(/Prayer/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Faith/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Communion/).length).toBeGreaterThanOrEqual(1)
  })

  it('has sermon action links', () => {
    render(<Sermons />)
    expect(screen.getAllByLabelText(/link/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText(/pdf/i).length).toBeGreaterThanOrEqual(1)
  })
})
