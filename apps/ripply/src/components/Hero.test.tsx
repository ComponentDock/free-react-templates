import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

const FIRST_SUBTITLE = 'The best app landing page template for your next launch'
const SECOND_SUBTITLE = 'Beautiful, fast and easy to customize for any product'

describe('Hero', () => {
  it('renders the wordmark, first subtitle and SIGN UP pill', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: 'OnTouch' })).toBeInTheDocument()
    expect(screen.getByText(FIRST_SUBTITLE)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'SIGN UP' })).toHaveAttribute('href', '#feature')
  })

  it('moves forward, wraps at the end and back', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText(SECOND_SUBTITLE)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    // Wrap around from the last slide back to the first.
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText(FIRST_SUBTITLE)).toBeInTheDocument()

    // Previous from the first slide wraps to the last.
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText(SECOND_SUBTITLE)).toBeInTheDocument()
  })

  it('jumps to a slide via the indicators', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByText(SECOND_SUBTITLE)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'false',
    )
  })
})
