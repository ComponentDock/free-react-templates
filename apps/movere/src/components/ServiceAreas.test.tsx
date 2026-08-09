import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceAreas } from './ServiceAreas'

describe('ServiceAreas', () => {
  it('renders the heading and both area lists', () => {
    render(<ServiceAreas />)

    expect(screen.getByRole('heading', { name: 'We Move You Anywhere' })).toBeInTheDocument()

    const localCard = screen.getByRole('heading', { name: /Local Moves/ }).closest('div')!
    expect(within(localCard).getByText('Chicago Metro')).toBeInTheDocument()
    expect(within(localCard).getByText('Milwaukee')).toBeInTheDocument()
    expect(within(localCard).getByText('St. Louis')).toBeInTheDocument()
    expect(within(localCard).getAllByText(/drive/).length).toBeGreaterThanOrEqual(3)

    const longCard = screen.getByRole('heading', { name: /Long Distance/ }).closest('div')!
    expect(within(longCard).getByText('Chicago → New York')).toBeInTheDocument()
    expect(within(longCard).getByText('Chicago → Los Angeles')).toBeInTheDocument()
    expect(within(longCard).getByText('~2,015 mi')).toBeInTheDocument()
    expect(within(longCard).getByText('~1,380 mi')).toBeInTheDocument()
  })
})
