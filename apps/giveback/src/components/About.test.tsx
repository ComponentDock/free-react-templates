import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('shows the label, heading, copy, and CTA', () => {
    render(<About />)
    expect(screen.getByText(about.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: about.title })).toBeInTheDocument()
    expect(screen.getByText(about.paragraph)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: about.cta })).toHaveAttribute('href', '#causes')
  })

  it('renders the section photo', () => {
    render(<About />)
    expect(screen.getByAltText(/volunteers caring for children/i)).toHaveAttribute(
      'src',
      about.image,
    )
  })
})
