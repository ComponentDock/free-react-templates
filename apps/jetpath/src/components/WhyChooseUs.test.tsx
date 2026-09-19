import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders heading and all features', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Travel With Us')).toBeInTheDocument()
    expect(screen.getByText('Safe Travels')).toBeInTheDocument()
    expect(screen.getByText('Best Price Guarantee')).toBeInTheDocument()
    expect(screen.getByText('500+ Destinations')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Your safety is our priority/)).toBeInTheDocument()
    expect(screen.getByText(/We match any competitor price/)).toBeInTheDocument()
  })
})
