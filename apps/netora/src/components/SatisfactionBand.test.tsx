import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SatisfactionBand } from './SatisfactionBand'

describe('SatisfactionBand', () => {
  it('renders the navy band with icon, heading, copy, and white outline Learn More', () => {
    const { container } = render(<SatisfactionBand />)
    const band = screen.getByRole('region', { name: 'Satisfaction Guaranteed' })
    expect(band.className).toContain('bg-navy-band')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Satisfaction Guaranteed' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insurance, pharma & life sciences.',
      ),
    ).toBeInTheDocument()
    const learnMore = screen.getByRole('link', { name: 'Learn More' })
    expect(learnMore).toHaveAttribute('href', '#services')
    expect(learnMore.className).toContain('border-2 border-white')
    expect(container.querySelector('svg')).not.toBeNull()
  })
})
