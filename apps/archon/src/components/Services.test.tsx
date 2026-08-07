import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the intro label, heading, and Contact Us button', () => {
    render(<Services />)

    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Everything a building needs, under one roof',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Everything a building needs/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders four service cards with titles and blurbs', () => {
    render(<Services />)

    for (const title of ['Square', 'Technology', 'Brilliant Ideas', 'Blueprint']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Clean lines and honest materials/i)).toHaveLength(1)
    expect(screen.getByText(/Smart systems woven quietly/i)).toBeInTheDocument()
    expect(screen.getByText(/Big thinking that turns constraints/i)).toBeInTheDocument()
    expect(screen.getByText(/Precise drawings that make ambitious plans/i)).toBeInTheDocument()
  })
})
