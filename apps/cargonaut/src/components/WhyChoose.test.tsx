import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChoose } from './WhyChoose'

describe('WhyChoose', () => {
  it('renders the reasons list and the about call to action', () => {
    render(<WhyChoose />)
    expect(screen.getByRole('heading', { name: 'Why Choose Us?' })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByText('Apartments frequently or motionless.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '#services')
    expect(screen.getByAltText(/cargo ship being loaded/i)).toBeInTheDocument()
  })
})
