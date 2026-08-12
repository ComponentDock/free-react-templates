import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Venue } from './Venue'

describe('Venue', () => {
  it('renders the venue details, contact rows and the embedded map', () => {
    render(<Venue />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'California, United States' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Santa monica bullevard')).toBeInTheDocument()
    expect(screen.getByText('Monday to Wednesday')).toBeInTheDocument()
    expect(screen.getByText('17-19 June, 2026')).toBeInTheDocument()
    expect(screen.getByText('support@rally.events')).toBeInTheDocument()
    expect(screen.getByText('Send us your query anytime!')).toBeInTheDocument()
    expect(screen.getByTitle('Rally event venue map')).toBeInTheDocument()
  })
})
