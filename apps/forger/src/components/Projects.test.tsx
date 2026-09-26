import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the Our Projects heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
  })

  it('renders 5 project cards', () => {
    render(<Projects />)
    const headings = screen.getAllByText('Branding & Illustration Design')
    expect(headings).toHaveLength(5)
  })

  it('shows category labels', () => {
    render(<Projects />)
    const labels = screen.getAllByText('Web Design')
    expect(labels.length).toBeGreaterThanOrEqual(5)
  })
})
