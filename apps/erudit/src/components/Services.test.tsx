import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all 6 service headings', () => {
    render(<Services />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(6)
  })

  it('renders service labels with correct text', () => {
    render(<Services />)
    expect(screen.getByText(/Web/)).toBeInTheDocument()
    expect(screen.getAllByText(/Development/).length).toBe(2)
    expect(screen.getByText(/Science/)).toBeInTheDocument()
    expect(screen.getByText(/Graphic/)).toBeInTheDocument()
    expect(screen.getByText(/Media/)).toBeInTheDocument()
    expect(screen.getByText(/Interface/)).toBeInTheDocument()
  })

  it('renders Discover Courses button', () => {
    render(<Services />)
    expect(screen.getByText('Discover Courses')).toBeInTheDocument()
  })
})
