import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about section with heading and subtext', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /We Solve Your Financial Problem/i }),
    ).toBeInTheDocument()
  })

  it('has a learn more link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', '#services')
  })
})
