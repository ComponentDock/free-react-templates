import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and blurb', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /We Are Creating Since 1990/i })).toBeInTheDocument()
  })

  it('shows at least two fact boxes with a number and a label', () => {
    render(<About />)
    expect(screen.getAllByText('1990').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText(/projects done/i).length).toBeGreaterThanOrEqual(2)
  })

  it('renders a view-more button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /view more/i })).toBeInTheDocument()
  })
})
