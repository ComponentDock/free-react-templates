import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the subheading and section heading', () => {
    render(<WhyChooseUs />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Why Choose Us?' })).toBeInTheDocument()
  })

  it('renders a photo half and four feature rows', () => {
    render(<WhyChooseUs />)

    expect(screen.getByRole('img', { name: /real estate agent/i })).toBeInTheDocument()

    for (const title of [
      'No Downpayment',
      'All Cash Offer',
      'Experts in Your Corner',
      'Locked in Pricing',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders a description under every feature title', () => {
    render(<WhyChooseUs />)

    expect(screen.getAllByText(/pay nothing/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/cash/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/expert/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/pricing/i).length).toBeGreaterThan(0)
  })
})
