import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DealsOfTheWeek } from './DealsOfTheWeek'

describe('DealsOfTheWeek', () => {
  it('renders the section title', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText('Deals of the Week')).toBeInTheDocument()
  })

  it('renders all nine deal items', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText('Black Lace Heels')).toBeInTheDocument()
    expect(screen.getByText('Canvas Sneakers')).toBeInTheDocument()
    expect(screen.getByText('Running Shorts')).toBeInTheDocument()
    expect(screen.getByText('Denim Jacket')).toBeInTheDocument()
    expect(screen.getByText('Training Gloves')).toBeInTheDocument()
    expect(screen.getByText('Sport Watch')).toBeInTheDocument()
    expect(screen.getByText('Yoga Mat')).toBeInTheDocument()
    expect(screen.getByText('Compression Tee')).toBeInTheDocument()
    expect(screen.getByText('Cross Training Bag')).toBeInTheDocument()
  })

  it('renders the sidebar image', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByAltText('Featured category')).toBeInTheDocument()
  })

  it('renders deal prices', () => {
    render(<DealsOfTheWeek />)
    expect(screen.getByText('$189.00')).toBeInTheDocument()
    expect(screen.getAllByText('$210.00').length).toBeGreaterThanOrEqual(1)
  })
})
