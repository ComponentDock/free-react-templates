import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide with headline, subtext, CTA, and controls', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { name: 'Get fit & healthy.' })).toBeInTheDocument()
    expect(screen.getByText(/Train with certified coaches/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get a membership' })).toHaveAttribute(
      'href',
      '#pricing',
    )

    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toBeInTheDocument()
  })

  it('cycles slides with the next control and wraps around', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const next = screen.getByRole('button', { name: 'Next slide' })
    await user.click(next)
    expect(screen.getByRole('heading', { name: 'Long life Fitness.' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()

    await user.click(next)
    expect(screen.getByRole('heading', { name: 'Fitness wonder.' })).toBeInTheDocument()

    await user.click(next)
    expect(screen.getByRole('heading', { name: 'Get fit & healthy.' })).toBeInTheDocument()
  })

  it('wraps backward with the previous control', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { name: 'Fitness wonder.' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { name: 'Long life Fitness.' })).toBeInTheDocument()
  })

  it('jumps to a slide from the indicator buttons', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { name: 'Fitness wonder.' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(screen.getByRole('heading', { name: 'Get fit & healthy.' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
