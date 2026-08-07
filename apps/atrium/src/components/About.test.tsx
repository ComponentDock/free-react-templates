import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, list, badge, and button', () => {
    render(<About />)

    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(2)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Architectural Plan Design and Build' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/From concept to completion/i)).toBeInTheDocument()
    expect(screen.getByText('Residential and commercial architecture')).toBeInTheDocument()
    expect(screen.getByText('Interior planning, detailing, and finishes')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '#services')
  })
})
