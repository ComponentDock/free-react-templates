import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the kicker, headline with gold highlight, copy, offer link, and scroll indicator', () => {
    render(<Hero />)

    expect(screen.getByText('Our best offers')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'The hair that you dream' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View our offers' })).toHaveAttribute(
      'href',
      '#services',
    )
    expect(screen.getByText('Scroll Down')).toBeInTheDocument()
  })

  it('advances the slide counter and progress bar with the next control', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    expect(screen.getByText('01.')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('02.')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('03.')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('01.')).toBeInTheDocument()
  })

  it('moves backward with the previous control and wraps around', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('03.')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('02.')).toBeInTheDocument()
  })
})
