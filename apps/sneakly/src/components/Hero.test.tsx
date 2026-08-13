import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide with its copy and CTA', () => {
    render(<Hero />)

    expect(screen.getByText('#New Arrival')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Shoes Collection 2019' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Discover Now' })).toHaveAttribute('href', '#products')
  })

  it('advances to the second slide and back with the arrows', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'New Shoes Winter Collection' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Shoes Collection 2019' }),
    ).toBeInTheDocument()
  })

  it('wraps around when navigating past the last slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'New Shoes Winter Collection' }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via its dot', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'New Shoes Winter Collection' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('renders both slide images as decorative', () => {
    const { container } = render(<Hero />)

    expect(container.querySelectorAll('img[alt=""]')).toHaveLength(2)
  })
})
