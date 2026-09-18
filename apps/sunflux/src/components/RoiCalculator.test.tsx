import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RoiCalculator } from './RoiCalculator'

describe('RoiCalculator', () => {
  it('renders the heading and subtext', () => {
    render(<RoiCalculator />)
    expect(
      screen.getByRole('heading', { name: 'Solar vs. Traditional Energy' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/See how much you save over time/i)).toBeInTheDocument()
  })

  it('renders the comparison table with all rows', () => {
    render(<RoiCalculator />)
    expect(screen.getByRole('heading', { name: 'Cost Comparison' })).toBeInTheDocument()
    for (const metric of ['Monthly Cost', 'Annual Cost', '10-Year Cost', 'CO2 Emissions']) {
      expect(screen.getByText(metric)).toBeInTheDocument()
    }
    expect(screen.getByText('$45')).toBeInTheDocument()
    expect(screen.getByText('$180')).toBeInTheDocument()
  })

  it('renders the ROI bar chart with cumulative savings', () => {
    render(<RoiCalculator />)
    expect(screen.getByRole('heading', { name: 'Cumulative Savings' })).toBeInTheDocument()
    for (const year of ['Year 1', 'Year 5', 'Year 10', 'Year 25']) {
      expect(screen.getByText(year)).toBeInTheDocument()
    }
    for (const savings of ['$1,620', '$8,100', '$16,200', '$40,500']) {
      expect(screen.getByText(savings)).toBeInTheDocument()
    }
  })

  it('shows the disclaimer text', () => {
    render(<RoiCalculator />)
    expect(screen.getByText(/Based on average residential usage/i)).toBeInTheDocument()
  })
})
