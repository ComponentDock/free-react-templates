import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, and progress indicators', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'About Appy' })).toBeInTheDocument()

    expect(
      screen.getByText(/Appy is a modern landing template crafted for mobile apps/),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Our Progress' })).toBeInTheDocument()

    const bars = screen.getAllByRole('progressbar')
    expect(bars).toHaveLength(3)
    expect(bars[0]).toHaveAttribute('aria-valuenow', '90')
  })
})
