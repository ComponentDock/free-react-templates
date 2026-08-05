import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, watch-video button, and the first screen preview', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: "It's all about Promoting your Business" }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Libero ex inventore vel error/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Watch video' })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: 'Colid app screen 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to screen 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('navigates between the screen previews with the arrows and dots', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next screen' }))
    expect(screen.getByRole('img', { name: 'Colid app screen 2' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous screen' }))
    expect(screen.getByRole('img', { name: 'Colid app screen 1' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to screen 5' }))
    expect(screen.getByRole('img', { name: 'Colid app screen 5' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to screen 5' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
