import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the kicker, heading, supporting copy, and a View Prices link', () => {
    render(<About />)

    expect(screen.getByText('About Our Story')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'ABOUT Our STORY' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Prices' })).toHaveAttribute('href', '#prices')
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(0)
  })
})
