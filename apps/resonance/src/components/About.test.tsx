import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the image, label, heading, and paragraphs', () => {
    render(<About />)

    expect(screen.getByRole('img', { name: about.imageAlt })).toHaveAttribute('src', about.image)
    expect(screen.getAllByText(about.pill).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: about.heading })).toBeInTheDocument()
    for (const paragraph of about.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
  })

  it('renders the check-list and the About us call-to-action', () => {
    render(<About />)

    for (const point of about.points) {
      expect(screen.getByText(point)).toBeInTheDocument()
    }

    const cta = screen.getByRole('link', { name: about.cta })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})
