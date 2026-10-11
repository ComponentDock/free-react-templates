import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularPlaces } from './PopularPlaces'

describe('PopularPlaces', () => {
  it('renders the section header and four destination cards', () => {
    render(<PopularPlaces />)

    expect(screen.getByText("We're Offering these Trip Packages")).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Popular Places Around the World' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('link')
    expect(cards).toHaveLength(4)
    expect(cards[0]).toHaveAttribute('href', '#packages')
    expect(cards[0]).toHaveClass('group', 'h-[420px]')
  })

  it('shows the guided-tour caption over each photo with the darken and slide-up hover treatment', () => {
    render(<PopularPlaces />)

    expect(screen.getAllByText('Proper Guided Tour')).toHaveLength(4)
    expect(screen.getByText('Santorini Island Dream Holiday and Fun package')).toBeInTheDocument()

    const caption = screen.getByText('Santorini Island Dream Holiday and Fun package').parentElement
    expect(caption).toHaveClass('group-hover:bottom-[80px]', 'transition-all')

    const firstCard = screen.getAllByRole('link')[0] as HTMLElement
    expect(firstCard.querySelector('span[aria-hidden="true"]')).toHaveClass('group-hover:bg-ink/40')

    const images = screen.getAllByRole('img')
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/outpost-place-1/600/840')
  })
})
