import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the eyebrow and heading', () => {
    render(<Services />)
    expect(screen.getByText(services.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: services.heading })).toBeInTheDocument()
  })

  it('renders the red tick bar next to the heading', () => {
    const { container } = render(<Services />)
    expect(container.querySelector('.bg-brand')).toBeInTheDocument()
  })

  it('renders all four service cards with titles and Learn More links', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: /Learn More/ })
    expect(links).toHaveLength(4)
    for (const item of services.items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }
  })

  it('renders an icon per card', () => {
    const { container } = render(<Services />)
    const icons = container.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(4)
  })

  it('gives every card the white rounded panel style', () => {
    render(<Services />)
    const cards = document.querySelectorAll('article')
    expect(cards.length).toBe(4)
    for (const card of cards) {
      expect(card).toHaveClass('bg-white', 'rounded-[5px]')
    }
  })
})
