import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading, blurb, and three plans with prices', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Purchase App' })).toBeInTheDocument()

    expect(screen.getAllByText('Free').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
  })

  it('lists plan features and a Buy Now button per plan', () => {
    render(<Pricing />)

    for (const feature of [
      '2 Email Addresses',
      '25 GB Space',
      '24h Live Support',
      'Documentation inside',
      'SEO Plan',
    ]) {
      expect(screen.getAllByText(feature).length).toBeGreaterThanOrEqual(2)
    }

    expect(screen.getAllByRole('link', { name: 'Buy Now' })).toHaveLength(3)
  })
})
