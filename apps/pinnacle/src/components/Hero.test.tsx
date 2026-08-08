import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and a Details button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: 'Dream Heaven City' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Details' })).toBeInTheDocument()
  })

  it('navigates slides with the next and previous buttons', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    // inactive slides are aria-hidden, so exactly one h1 is exposed
    expect(screen.getByRole('heading', { level: 1, name: 'Dream Heaven City' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps to the last slide from the first with the previous button', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
