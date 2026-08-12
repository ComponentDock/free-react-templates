import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, copy, CTA and navigation arrows on the first slide', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: 'What is Crossfit?' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('moves to the next and previous slides', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(screen.getByLabelText('Slide 1 of 3')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByLabelText('Slide 2 of 3')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByLabelText('Slide 1 of 3')).toBeInTheDocument()
  })

  it('wraps around from the last slide to the first', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByLabelText('Slide 1 of 3')).toBeInTheDocument()
  })
})
