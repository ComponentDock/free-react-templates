import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the first slide headline and a call to action', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Tressly' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book Online/ })).toBeInTheDocument()
  })

  it('moves to the next slide with the arrow buttons', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Hair Salon Expert' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Beautiful Hair, Healthy You!' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Hair Salon Expert' })).toBeInTheDocument()
  })

  it('wraps from the last slide back to the first', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Tressly' }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot buttons', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Beautiful Hair, Healthy You!' }),
    ).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Welcome to Tressly' }),
    ).toBeInTheDocument()
  })
})
