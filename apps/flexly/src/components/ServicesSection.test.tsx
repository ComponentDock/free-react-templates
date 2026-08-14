import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesSection } from './ServicesSection'
import { SERVICE_CARDS } from '../data'

describe('ServicesSection', () => {
  it('renders the heading and five service cards with icons', () => {
    const { container } = render(<ServicesSection />)

    expect(screen.getByText('Sexy & Healthy')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get a Perfect Body' })).toBeInTheDocument()
    for (const card of SERVICE_CARDS) {
      expect(screen.getByRole('heading', { name: card.title })).toBeInTheDocument()
      expect(screen.getByText(card.text)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(SERVICE_CARDS.length)
  })
})
