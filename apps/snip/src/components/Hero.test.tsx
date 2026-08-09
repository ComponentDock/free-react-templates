import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows a level-1 headline and a call-to-action button', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Experienced and traditional stylish barber shop',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Book An Appointment/ })).toBeInTheDocument()
  })

  it('advances and rewinds through the slides', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Connect with your dream style' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Experienced and traditional stylish barber shop',
      }),
    ).toBeInTheDocument()
  })

  it('wraps around from the last slide to the first', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Experienced and traditional stylish barber shop',
      }),
    ).toBeInTheDocument()
  })
})
