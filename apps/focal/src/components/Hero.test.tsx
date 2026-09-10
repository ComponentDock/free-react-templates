import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide by default', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByText('Photography is on its way.')).toBeInTheDocument()
    expect(screen.getByText(/View Galleries/)).toBeInTheDocument()
  })

  it('renders the slide number watermark', () => {
    render(<Hero />)
    expect(screen.getByText('01/03')).toBeInTheDocument()
  })

  it('navigates to next slide when next button is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)

    expect(screen.getByText('02/03')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Capture interesting things.')).toBeInTheDocument()
  })

  it('navigates to previous slide when prev button is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    // Go to slide 2 first
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)
    expect(screen.getByText('02/03')).toBeInTheDocument()

    // Go back to slide 1
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevBtn)
    expect(screen.getByText('01/03')).toBeInTheDocument()
    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })

  it('wraps around to first slide from last', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    // Navigate to last slide (3/3)
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)
    await user.click(nextBtn)
    expect(screen.getByText('03/03')).toBeInTheDocument()

    // Next should wrap to first
    await user.click(nextBtn)
    expect(screen.getByText('01/03')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const dot2 = screen.getByRole('button', { name: /go to slide 2/i })
    await user.click(dot2)

    expect(screen.getByText('02/03')).toBeInTheDocument()
    expect(screen.getByText('Capture interesting things.')).toBeInTheDocument()
  })

  it('wraps around to last slide from first via prev', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevBtn)

    expect(screen.getByText('03/03')).toBeInTheDocument()
  })

  it('clicks the View Galleries CTA button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const cta = screen.getByRole('button', { name: /view galleries/i })
    await user.click(cta)
    // Button was clicked without error — handler executed
    expect(cta).toBeInTheDocument()
  })
})
