import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Impact } from './Impact'

describe('Impact', () => {
  it('shows the section heading', () => {
    render(<Impact />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Numbers That Matter' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Every gift adds up/)).toBeInTheDocument()
  })

  it('shows the impact statistics', () => {
    render(<Impact />)

    expect(screen.getByText('$2.4M')).toBeInTheDocument()
    expect(screen.getByText('Funds Raised')).toBeInTheDocument()
    expect(screen.getByText('50,000+')).toBeInTheDocument()
    expect(screen.getByText('Lives Impacted')).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('Communities Served')).toBeInTheDocument()
    expect(screen.getByText('350K')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Hours')).toBeInTheDocument()
  })
})
