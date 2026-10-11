import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Carousel } from './Carousel'

const FIRST = 'A carousel you can build on — explore the free UI kit.'
const SECOND = 'The Structkit Free UI Kit.'

describe('Carousel', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with the white pill call to action', () => {
    render(<Carousel />)

    expect(screen.getByRole('heading', { level: 2, name: FIRST })).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'See all components' })
    expect(cta).toHaveClass('bg-white')
    expect(cta).toHaveAttribute('href', '#buttons')
    expect(screen.getAllByRole('button', { name: /Show slide/ })).toHaveLength(3)
  })

  it('advances and rewinds with the next and previous controls', () => {
    render(<Carousel />)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 2, name: SECOND })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 2, name: FIRST })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Enjoy a free UI kit crafted with Structkit.',
      }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide from the indicators', () => {
    render(<Carousel />)

    const third = screen.getByRole('button', { name: 'Show slide 3' })
    fireEvent.click(third)

    expect(third).toHaveAttribute('aria-current', 'true')
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Enjoy a free UI kit crafted with Structkit.',
      }),
    ).toBeInTheDocument()
  })

  it('autoplays to the next slide on the timer', () => {
    vi.useFakeTimers()
    render(<Carousel />)

    expect(screen.getByRole('heading', { level: 2, name: FIRST })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(screen.getByRole('heading', { level: 2, name: SECOND })).toBeInTheDocument()
  })
})
