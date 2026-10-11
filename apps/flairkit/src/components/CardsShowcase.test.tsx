import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CardsShowcase } from './CardsShowcase'

describe('CardsShowcase', () => {
  it('renders three cards sharing the same copy and CTA', () => {
    render(<CardsShowcase />)

    expect(screen.getByRole('heading', { level: 3, name: 'Cards' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 5, name: 'Card title' })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Go somewhere' })).toHaveLength(3)
    expect(screen.getByRole('img', { name: 'Card cover' }).getAttribute('src')).toContain(
      'flairkit-card-1',
    )
  })

  it('renders the image-top card with padded body', () => {
    const { container } = render(<CardsShowcase />)

    const card = container.querySelector('img')?.closest('div')

    expect(card?.className).toContain('shadow-card')
    expect(container.querySelector('.p-8')).not.toBeNull()
  })

  it('renders the pink icon card and the pink round-icon card', () => {
    const { container } = render(<CardsShowcase />)

    expect(container.querySelector('svg.text-flair-primary')).not.toBeNull()
    expect(container.querySelector('span.rounded-full.bg-flair-primary')).not.toBeNull()
  })
})
