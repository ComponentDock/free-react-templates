import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the centered section header', () => {
    render(<Services />)

    expect(screen.getByText("We're Offering these Popular Services")).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Getting Adventure with Services' }),
    ).toBeInTheDocument()
  })

  it('renders three cards with copy above the illustration panel and a gradient button', () => {
    render(<Services />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)

    expect(
      screen.getByRole('heading', { level: 5, name: 'Desert Riding Turning So much Flowery' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 5,
        name: 'Relaxation in the Local Beach Campfire',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 5,
        name: 'Forest Exploration with Energy Package',
      }),
    ).toBeInTheDocument()

    expect(cards[0]).toHaveClass('hover:shadow-[0px_5px_50px_rgba(129,74,255,0.2)]')

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/outpost-service-1/520/320')

    const readMore = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMore).toHaveLength(3)
    expect(readMore[0]).toHaveAttribute('href', '#packages')
    expect(readMore[0]).toHaveClass('brand-gradient')
  })
})
