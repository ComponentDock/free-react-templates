import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Volunteer } from './Volunteer'

describe('Volunteer', () => {
  it('renders the volunteer heading, copy, and donation CTA', () => {
    render(<Volunteer />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/We looking for helping hand/)
    expect(screen.getByText(/far from the countries vokalia/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make a Donation' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')
  })
})
