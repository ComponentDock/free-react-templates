import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and features', () => {
    render(<About />)
    expect(screen.getByText('Why Put Your Trust In Our Law Firm')).toBeInTheDocument()
    expect(screen.getAllByText('Expert Attorneys').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Great Discount')).toBeInTheDocument()
    expect(screen.getByText('Legal Advisory')).toBeInTheDocument()
    expect(screen.getByText('Quick Charges')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Law office')).toBeInTheDocument()
  })
})
