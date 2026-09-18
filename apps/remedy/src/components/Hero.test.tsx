import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide heading', () => {
    render(<Hero />)
    expect(screen.getByText(/remedy/i)).toBeInTheDocument()
    expect(screen.getByText(/opens 24 hours/i)).toBeInTheDocument()
  })

  it('renders shop now buttons', () => {
    render(<Hero />)
    const shopLinks = screen.getAllByRole('link', { name: /shop now/i })
    expect(shopLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('has navigation arrows', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('navigates to next slide on arrow click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)
    expect(screen.getByText(/new medicine/i)).toBeInTheDocument()
  })

  it('navigates to previous slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevBtn)
    expect(screen.getByText(/new medicine/i)).toBeInTheDocument()
  })

  it('has slide dot indicators', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /go to slide 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /go to slide 2/i })).toBeInTheDocument()
  })

  it('allows clicking a dot to change slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dot2 = screen.getByRole('button', { name: /go to slide 2/i })
    await user.click(dot2)
    expect(screen.getByText(/new medicine/i)).toBeInTheDocument()
  })
})
