import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the Featured Works heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Featured Works' })).toBeInTheDocument()
  })

  it('renders four project cards', () => {
    render(<Portfolio />)
    const headings = screen.getAllByText('Project Title')
    expect(headings.length).toBe(4)
  })

  it('has view and link buttons for each project', () => {
    render(<Portfolio />)
    const viewButtons = screen.getAllByLabelText(/View Project/)
    expect(viewButtons.length).toBe(4)
    const linkButtons = screen.getAllByLabelText(/Link to Project/)
    expect(linkButtons.length).toBe(4)
  })
})
