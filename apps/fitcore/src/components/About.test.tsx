import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and section label', () => {
    render(<About />)
    expect(screen.getByText('About Our Gym')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Safe Body Building/)
  })

  it('shows the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Inside the gym')).toBeInTheDocument()
  })

  it('has a Become a Member link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Become a Member/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
