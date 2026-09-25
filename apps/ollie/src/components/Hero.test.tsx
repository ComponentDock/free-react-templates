import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, subtext, and CTA link', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Ride Beyond Limits/ }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Pushing boundaries in skateboarding culture/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Explore More' })).toHaveAttribute('href', '#services')
  })

  it('renders slide images', () => {
    render(<Hero />)
    expect(screen.getByAltText('Ride Beyond Limits')).toBeInTheDocument()
    expect(screen.getByAltText('Own the Streets')).toBeInTheDocument()
  })

  it('renders prev/next navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('renders slide indicator dots', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
  })

  it('navigates to next slide on click', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const nextBtn = screen.getByRole('button', { name: 'Next slide' })
    await user.click(nextBtn)

    expect(screen.getByRole('heading', { level: 1, name: /Own the Streets/ })).toBeInTheDocument()
  })

  it('navigates to previous slide on click', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const prevBtn = screen.getByRole('button', { name: 'Previous slide' })
    await user.click(prevBtn)

    // Going back from slide 0 wraps to last slide (slide 1)
    expect(screen.getByRole('heading', { level: 1, name: /Own the Streets/ })).toBeInTheDocument()
  })

  it('navigates to specific slide via dot indicator', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { level: 1, name: /Own the Streets/ })).toBeInTheDocument()
  })
})
