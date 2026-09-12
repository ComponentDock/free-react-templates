import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import {
  servicesSubtitle,
  servicesHeading,
  servicesText,
  servicesButtonLabel,
  serviceCards,
} from '../data'

describe('Services', () => {
  it('renders the subtitle, heading, paragraph, and button', () => {
    render(<Services />)
    expect(screen.getByText(servicesSubtitle)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(servicesHeading)
    expect(screen.getByText(servicesText)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: servicesButtonLabel })).toHaveAttribute(
      'href',
      '#services',
    )
  })

  it('renders all service cards with titles and descriptions', () => {
    render(<Services />)
    for (const card of serviceCards) {
      expect(screen.getByText(card.title)).toBeInTheDocument()
      expect(screen.getByText(card.description)).toBeInTheDocument()
    }
  })

  it('renders the correct number of service cards', () => {
    render(<Services />)
    const cards = screen.getAllByText(
      /Video Production|Photography|Image Editing|Creative Direction/,
    )
    expect(cards).toHaveLength(serviceCards.length)
  })
})
