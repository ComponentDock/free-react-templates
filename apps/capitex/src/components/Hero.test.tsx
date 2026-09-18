import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and form', () => {
    render(<Hero />)
    expect(screen.getByText(/Financial Solutions for Your Business Growth/i)).toBeInTheDocument()
    expect(screen.getByText(/How It Works/)).toBeInTheDocument()
    expect(screen.getByText('How much you want?')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Amount')).toBeInTheDocument()
    expect(screen.getByLabelText('Duration')).toBeInTheDocument()
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByText('Continue')).toBeInTheDocument()
  })

  it('shows price label', () => {
    render(<Hero />)
    expect(screen.getByText('Price: $0')).toBeInTheDocument()
  })

  it('renders select options', () => {
    render(<Hero />)
    const amountSelect = screen.getByLabelText('Amount')
    expect(amountSelect.tagName).toBe('SELECT')
    expect(screen.getByText('$500')).toBeInTheDocument()
    expect(screen.getByText('$10,000')).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByText('Continue'))
  })
})
