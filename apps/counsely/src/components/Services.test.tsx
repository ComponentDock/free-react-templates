import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the left heading column with its CTA', () => {
    render(<Services />)
    expect(screen.getByText(services.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: services.headline })).toBeInTheDocument()
    expect(screen.getByText(services.description)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: services.cta.label })
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('renders three service cards with titles, copy, and circular icons', () => {
    const { container } = render(<Services />)
    for (const card of services.cards) {
      expect(screen.getByRole('heading', { level: 3, name: card.title })).toBeInTheDocument()
      expect(screen.getByText(card.description)).toBeInTheDocument()
    }
    const icons = container.querySelectorAll('article div svg')
    expect(icons.length).toBe(3)
  })

  it('renders a hover-reveal gold circle arrow on each card', () => {
    const { container } = render(<Services />)
    const arrows = container.querySelectorAll('article span.bg-brand')
    expect(arrows.length).toBe(3)
    expect(arrows[0]!.className).toContain('opacity-0')
  })
})
