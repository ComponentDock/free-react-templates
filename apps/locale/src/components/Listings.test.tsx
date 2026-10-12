import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Listings } from './Listings'
import {
  CLOSED_LABEL,
  LISTINGS,
  LISTINGS_SUBTITLE,
  LISTINGS_TITLE,
  LISTING_CATEGORY,
  NEXT_ARROW_LABEL,
  PREVIOUS_ARROW_LABEL,
  SAVE_LABEL,
  WINDOW_SIZE,
} from '../lib/site'

function dots() {
  return LISTINGS.map((listing, index) =>
    screen.getByRole('button', { name: `${listing.title} slide ${index + 1}` }),
  )
}

function titles() {
  return screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)
}

describe('Listings', () => {
  it('renders the heading, the subtext and a window of four cards', () => {
    render(<Listings />)

    expect(screen.getByRole('heading', { level: 2, name: LISTINGS_TITLE })).toBeInTheDocument()
    expect(screen.getByText(LISTINGS_SUBTITLE)).toBeInTheDocument()
    expect(screen.getAllByTestId('listing-card')).toHaveLength(WINDOW_SIZE)
  })

  it('opens on the first listing and describes every card', () => {
    render(<Listings />)

    const first = LISTINGS[0] as (typeof LISTINGS)[number]
    expect(titles()[0]).toBe(first.title)
    expect(screen.getAllByText(CLOSED_LABEL)).toHaveLength(WINDOW_SIZE)
    expect(screen.getAllByText(LISTING_CATEGORY)).toHaveLength(WINDOW_SIZE)
    expect(screen.getAllByText(`- ${first.rating}`)).toHaveLength(1)
    expect(screen.getByText(first.address)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: `${SAVE_LABEL} ${first.title}` })).toBeInTheDocument()
    expect(screen.getAllByText(first.title).length).toBeGreaterThan(0)
  })

  it('steps the window forward with the next arrow', () => {
    render(<Listings />)

    fireEvent.click(screen.getByRole('button', { name: NEXT_ARROW_LABEL }))

    expect(titles()[0]).toBe((LISTINGS[1] as (typeof LISTINGS)[number]).title)
    expect(screen.getByRole('button', { name: `${LISTINGS[1]?.title} slide 2` })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps backwards from the first window to the last listing', () => {
    render(<Listings />)

    fireEvent.click(screen.getByRole('button', { name: PREVIOUS_ARROW_LABEL }))

    const last = LISTINGS[LISTINGS.length - 1] as (typeof LISTINGS)[number]
    expect(titles()[0]).toBe(last.title)
    expect(screen.getByRole('button', { name: `${last.title} slide ${LISTINGS.length}` })).toHaveClass(
      'bg-brand',
    )
  })

  it('wraps forwards past the last listing', () => {
    render(<Listings />)

    for (let step = 0; step < LISTINGS.length; step += 1) {
      fireEvent.click(screen.getByRole('button', { name: NEXT_ARROW_LABEL }))
    }

    expect(titles()[0]).toBe((LISTINGS[0] as (typeof LISTINGS)[number]).title)
  })

  it('jumps to a listing from its dot and marks that dot current', () => {
    render(<Listings />)

    fireEvent.click(dots()[2] as HTMLElement)

    expect(titles()[0]).toBe((LISTINGS[2] as (typeof LISTINGS)[number]).title)
    expect(dots()[2]).toHaveAttribute('aria-current', 'true')
    expect(dots()[0]).not.toHaveAttribute('aria-current')
    expect(dots()[2]).toHaveClass('bg-brand')
    expect(dots()[0]).toHaveClass('bg-edge')
  })
})
