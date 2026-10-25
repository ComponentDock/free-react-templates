import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroTicks } from '../data'

const TODAY = new Date(2026, 5, 5)

describe('Hero', () => {
  it('renders the single headline, the lede and the four ticks', () => {
    render(<Hero today={TODAY} />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Pick your arrival window right now.' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Air conditioning, heating and air quality across Cedar County/),
    ).toBeInTheDocument()

    const ticks = screen.getAllByRole('listitem').slice(0, 4)
    expect(ticks.map((tick) => tick.textContent)).toEqual([...heroTicks])
  })

  it('exposes the rating as one labelled figure', () => {
    render(<Hero today={TODAY} />)

    expect(screen.getByRole('img', { name: 'Rated 4.8 out of 5' })).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
  })

  it('places the booking widget in the hero', () => {
    const { container } = render(<Hero today={TODAY} />)

    expect(screen.getByRole('heading', { name: 'Book a technician' })).toBeInTheDocument()
    expect(container.querySelector('#book')).toBeInTheDocument()
  })
})
