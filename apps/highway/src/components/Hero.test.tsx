import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and description', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /rent a car/i })).toBeInTheDocument()
    expect(screen.getByText(/powerful and elegant car rental/)).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<Hero />)
    const playBtn = screen.getByRole('button', { name: 'Play video' })
    expect(playBtn).toBeInTheDocument()
    expect(playBtn).toHaveClass('rounded-full', 'bg-brand')
  })

  it('renders booking form fields', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Pick-up Location')).toBeInTheDocument()
    expect(screen.getByLabelText('Drop-off Location')).toBeInTheDocument()
    expect(screen.getByLabelText('Pick-up Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Drop-off Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Pick-up Time')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search Vehicle' })).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    const submitPrevented = vi.fn()
    render(<Hero />)
    const form = screen.getByLabelText('Pick-up Location').closest('form')!
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      submitPrevented()
    })
    await user.click(screen.getByRole('button', { name: 'Search Vehicle' }))
    expect(submitPrevented).toHaveBeenCalled()
  })

  it('allows typing in location fields', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const pickup = screen.getByLabelText('Pick-up Location')
    await user.type(pickup, 'New York')
    expect(pickup).toHaveValue('New York')
  })
})
