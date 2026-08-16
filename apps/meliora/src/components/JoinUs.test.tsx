import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { JoinUs } from './JoinUs'

describe('JoinUs', () => {
  it('renders the centered heading and paragraph', () => {
    render(<JoinUs />)
    expect(screen.getByRole('heading', { name: 'Join with Us' })).toBeInTheDocument()
    expect(screen.getByText(/charitable organization/i)).toBeInTheDocument()
  })

  it('renders a Join Now pill button', () => {
    render(<JoinUs />)
    expect(screen.getByRole('link', { name: 'Join Now' })).toHaveAttribute('href', '#contact')
  })
})
