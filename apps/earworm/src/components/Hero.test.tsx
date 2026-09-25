import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the initial heading and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Subscribe Today')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Subscribe with iTunes/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Subscribe with RSS/i })).toBeInTheDocument()
  })

  it('shows the featured episode info', () => {
    render(<Hero />)
    expect(screen.getByText(/Episode 203/)).toBeInTheDocument()
    expect(screen.getByText(/Like \(29\)/)).toBeInTheDocument()
    expect(screen.getByText(/Share \(04\)/)).toBeInTheDocument()
    expect(screen.getByText(/Download \(12\)/)).toBeInTheDocument()
  })

  it('navigates between slides', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(screen.getByText('Subscribe Today')).toBeInTheDocument()

    const nextBtn = screen.getByRole('button', { name: /Go to slide 2/i })
    await user.click(nextBtn)
    expect(screen.getByText('Listen Now')).toBeInTheDocument()

    const thirdBtn = screen.getByRole('button', { name: /Go to slide 3/i })
    await user.click(thirdBtn)
    expect(screen.getByText('Discover Today')).toBeInTheDocument()
  })

  it('has an audio element', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('audio')).toBeInTheDocument()
  })
})
