import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import {
  amenityCardLabel,
  amenities,
  heroAutoplayMs,
  heroHeadline,
  heroSectionLabel,
} from '../data'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the headline and the three amenity cards', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroHeadline)
    expect(screen.getByRole('region', { name: heroSectionLabel })).toBeInTheDocument()

    for (const amenity of amenities) {
      expect(
        screen.getByRole('button', { name: amenityCardLabel(amenity.name) }),
      ).toBeInTheDocument()
    }
  })

  it('marks the first slide card as current and switches on click', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: amenityCardLabel('Pool') })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: amenityCardLabel('Restaurant') }))
    expect(screen.getByRole('button', { name: amenityCardLabel('Pool') })).not.toHaveAttribute(
      'aria-current',
    )
    expect(screen.getByRole('button', { name: amenityCardLabel('Restaurant') })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances the active slide and wraps around', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByRole('button', { name: amenityCardLabel('Pool') })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(heroAutoplayMs)
    })
    expect(screen.getByRole('button', { name: amenityCardLabel('Sauna') })).toHaveAttribute(
      'aria-current',
      'true',
    )

    // Two more ticks wrap from the last slide back to the first.
    act(() => {
      vi.advanceTimersByTime(heroAutoplayMs * 2)
    })
    expect(screen.getByRole('button', { name: amenityCardLabel('Pool') })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
