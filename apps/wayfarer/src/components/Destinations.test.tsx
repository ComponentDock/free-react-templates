import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { destinationSectionText, destinationSectionTitle, destinations } from '../data'
import { Destinations } from './Destinations'

describe('Destinations', () => {
  it('renders the section title and its supporting paragraph', () => {
    render(<Destinations />)
    expect(
      screen.getByRole('heading', { level: 2, name: destinationSectionTitle }),
    ).toBeInTheDocument()
    expect(screen.getByText(destinationSectionText)).toBeInTheDocument()
  })

  it('renders six destination cards with a country name and a places pill', () => {
    render(<Destinations />)
    const pills = screen.getAllByText(/Places$/)
    expect(pills).toHaveLength(destinations.length)
    for (const destination of destinations) {
      expect(screen.getByRole('heading', { level: 3, name: destination.name })).toBeInTheDocument()
    }
  })
})
