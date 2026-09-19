import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading and 6 service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Services')

    for (const title of [
      'Free Shipping',
      'Secure Payment',
      '24/7 Support',
      'Easy Returns',
      'Flexible Payment',
      'Gift Cards',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }

    const learnMoreLinks = screen.getAllByText('Learn More')
    expect(learnMoreLinks.length).toBe(6)
  })
})
