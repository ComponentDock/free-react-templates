import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders the kicker and heading', () => {
    render(<Services />)

    expect(screen.getByText('Services We Offer')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Best Services' })).toBeInTheDocument()
  })

  it('renders three icon cards with title and paragraph', () => {
    const { container } = render(<Services />)

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)
    for (const { title } of SERVICES) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    for (const { paragraph } of SERVICES) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(cards[0]!.querySelector('svg')).not.toBeNull()
  })

  it('lays the cards out in a 3-column desktop grid', () => {
    const { container } = render(<Services />)

    const grid = container.querySelector('article')?.parentElement as HTMLElement
    expect(grid.className).toMatch(/md:grid-cols-3/)
  })
})
