import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and company description', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'About Our Agency' })).toBeInTheDocument()
    expect(screen.getByText(/passionate team/i)).toBeInTheDocument()
  })

  it('shows the stat counters', () => {
    render(<About />)

    expect(screen.getByText('450+')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('35+')).toBeInTheDocument()
  })

  it('has semantic structure with section and aria-label', () => {
    render(<About />)
    expect(screen.getByRole('region', { name: 'About' })).toBeInTheDocument()
  })
})
