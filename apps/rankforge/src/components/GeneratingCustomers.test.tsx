import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GeneratingCustomers } from './GeneratingCustomers'

describe('GeneratingCustomers', () => {
  it('renders the heading and four feature items', () => {
    render(<GeneratingCustomers />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Generating New Customers Via Online Mode' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: 'All Sizes Business' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Awesome Results' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Keep you in the Loop' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Significant ROI' })).toBeInTheDocument()
  })
})
