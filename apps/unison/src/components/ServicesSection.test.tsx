import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServicesSection } from './ServicesSection'

describe('ServicesSection', () => {
  it('renders the title and all six service cards with icons and Learn More links', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()

    for (const title of [
      'Business Consulting',
      'Market Analysis',
      'User Monitoring',
      'Insurance Consulting',
      'Financial Investment',
      'Financial Management',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    const learnMore = screen.getAllByRole('link', { name: /Learn More/ })
    expect(learnMore).toHaveLength(6)
    expect(learnMore[0]).toHaveAttribute('href', '#services-section')
  })
})
