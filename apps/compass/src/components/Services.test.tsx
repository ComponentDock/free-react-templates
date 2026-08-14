import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the section title on the light band', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByTestId('services')).toHaveClass('bg-mist')
  })

  it('renders six cards with icon, title, text and Learn More link', () => {
    render(<Services />)
    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards).toHaveLength(6)

    const learnMoreLinks = screen.getAllByRole('link', { name: /Learn More/ })
    expect(learnMoreLinks).toHaveLength(6)
    for (const link of learnMoreLinks) {
      expect(link).toHaveAttribute('href', '#contact')
    }

    const section = screen.getByTestId('services')
    expect(section.querySelectorAll('svg')).toHaveLength(12) // 6 icons + 6 arrows

    for (const item of services.items) {
      const card = screen.getByRole('heading', { level: 3, name: item.title }).closest('div')!
      expect(within(card).getByText(item.text)).toBeInTheDocument()
    }
  })
})
