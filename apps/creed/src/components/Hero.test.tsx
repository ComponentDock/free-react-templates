import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/let god guide your path/i)
  })

  it('shows the worship time', () => {
    render(<Hero />)
    expect(screen.getByText(/sunday worship: 10:30 am/i)).toBeInTheDocument()
  })

  it('has previous and next slide buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('has slide navigation dots', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /go to slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 2/i })).toBeInTheDocument()
  })

  it('navigates to next slide on next button click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /walking in faith together/i,
    )
  })

  it('navigates to previous slide on prev button click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    // Wraps to last slide
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /walking in faith together/i,
    )
  })

  it('navigates to a specific slide via dot click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: /go to slide 2/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /walking in faith together/i,
    )
  })
})
