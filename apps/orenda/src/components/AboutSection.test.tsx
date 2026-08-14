import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the heading, paragraph, and three checklist items', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { name: 'Want to know more' })).toBeInTheDocument()
    expect(screen.getByText(/learning made simple/i)).toBeInTheDocument()
    expect(
      screen.getByText('Creative ideas built on real research and practice'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Clear learning paths designed for every skill level'),
    ).toBeInTheDocument()
    expect(screen.getByText('Supportive mentors who help you reach your goals')).toBeInTheDocument()
  })

  it('renders a More About Us button', () => {
    render(<AboutSection />)
    const button = screen.getByRole('link', { name: 'More About Us' })
    expect(button).toHaveAttribute('href', '#about')
  })

  it('renders the about illustration image', () => {
    render(<AboutSection />)
    expect(screen.getByRole('img', { name: 'Students learning together' })).toBeInTheDocument()
  })
})
