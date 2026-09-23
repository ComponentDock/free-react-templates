import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutUs } from './AboutUs'

describe('AboutUs', () => {
  it('renders the subtitle, heading, and three feature columns', () => {
    render(<AboutUs />)

    expect(screen.getByText('About us')).toBeInTheDocument()
    const descriptions = screen.getAllByText(/Far far away, behind the word mountains/)
    expect(descriptions.length).toBeGreaterThanOrEqual(4) // heading + 3 feature descriptions
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Innovative')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
  })

  it('displays the 15 years highlight', () => {
    render(<AboutUs />)

    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText(/years/)).toBeInTheDocument()
  })
})
