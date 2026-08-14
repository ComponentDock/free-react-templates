import { render, screen, fireEvent, act } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Properties } from './Properties'
import { PROPERTIES, PROPERTY_ADDRESS } from '../data'

describe('Properties', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and all three listing cards', () => {
    render(<Properties />)

    expect(screen.getByRole('heading', { name: 'Latest Properties' })).toBeInTheDocument()

    for (const property of PROPERTIES) {
      expect(screen.getByRole('link', { name: property.price })).toBeInTheDocument()
      expect(
        screen.getByRole('img', { name: `Listing priced at ${property.price}` }),
      ).toBeInTheDocument()
    }
    expect(screen.getAllByText(PROPERTY_ADDRESS).length).toBeGreaterThanOrEqual(3)
  })

  it('auto-advances the carousel every three seconds', () => {
    render(<Properties />)

    expect(screen.getByRole('button', { name: 'Go to property slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByRole('button', { name: 'Go to property slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByRole('button', { name: 'Go to property slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByRole('button', { name: 'Go to property slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide when its dot is clicked', () => {
    render(<Properties />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to property slide 3' }))
    expect(screen.getByRole('button', { name: 'Go to property slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
