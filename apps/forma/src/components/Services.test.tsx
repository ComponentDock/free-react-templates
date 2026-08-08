import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and six service cards with titles and blurbs', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Comprehensive Design Services' }),
    ).toBeInTheDocument()

    for (const title of [
      'Residential Design',
      'Commercial Design',
      'Hospitality Design',
      'Color & Material Consulting',
      'Space Planning',
      'Renovation Management',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/design|interiors/i).length).toBeGreaterThan(5)
  })
})
