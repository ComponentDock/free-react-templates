import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtext', () => {
    render(<Hero />)

    expect(screen.getByText('Find your perfect place.')).toBeInTheDocument()
    expect(screen.getByText(/Explore the world/)).toBeInTheDocument()
  })

  it('renders search form with input and button', () => {
    render(<Hero />)

    expect(screen.getByRole('textbox', { name: 'Search destinations' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const input = screen.getByRole('textbox', { name: 'Search destinations' })
    await user.type(input, 'Bali')

    expect(input).toHaveValue('Bali')
  })

  it('prevents default form submission', () => {
    render(<Hero />)

    const form = screen.getByRole('search')
    const preventDefault = vi.fn()
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)

    expect(preventDefault).toHaveBeenCalled()
  })
})
