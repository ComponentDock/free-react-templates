import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and four project cards with year, location, and description', () => {
    render(<Projects />)

    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Recent Projects' }),
    ).toBeInTheDocument()

    const titles = [
      'Skyline Tower Complex',
      'Riverside Luxury Estates',
      'Metro Innovation Hub',
      'Lakeside Residence',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText('Houston, TX')).toBeInTheDocument()
    expect(screen.getByText('The Woodlands, TX')).toBeInTheDocument()
    expect(screen.getByText('2024 · Commercial')).toBeInTheDocument()
    expect(screen.getByText('2023 · Renovation')).toBeInTheDocument()

    expect(screen.getByAltText('Skyline Tower Complex')).toBeInTheDocument()
  })
})
